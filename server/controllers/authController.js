const User = require('../schemas/userSchemas');
const { hashPassword } = require('../utils/passwordHasher');
const { passwordMatch } = require('../utils/passwordMatch');
const { ageValidation } = require('../utils/birthDateCompare');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.register = async (req, res) => {

    try {
        const { pseudo, email, password, birthDate } = req.body;

        if (!pseudo || !email || !password) {
            return res.status(400).json({ message: 'Tous les champs sont requis !' })
        }

        if (password.length < 8) {
            return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caractères' })
        }

        const isAgeValid = ageValidation(birthDate);
        if (!isAgeValid) return res.status(400).json({ message: 'Vous devez avoir au moins 13 ans pour vous inscrire !' });

        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ message: 'Adresse mail déjà utilisée !' });

        const hashedPassword = await hashPassword(password);

        await User.create({
            pseudo,
            email,
            password: hashedPassword,
            birthDate: new Date(birthDate)
        });

        return res.status(200).json({ message: 'Utilisateur créé avec succès !' })

    } catch (e) {
        return res.status(500).json({ message: `Erreur serveur lors de la création de l'utilisateur : ${e}` });
    }
}

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: 'Tous les champs sont requis' });

        const user = await User.findOne({ email }).select('+password');

        if (!user) return res.status(400).json({ message: 'Adresse mail ou mot de passe invalide' });

        const passMatch = await passwordMatch(password, user.password);

        if (!passMatch) return res.status(400).json({ message: 'Adresse mail ou mot de passe invalide' });

        const token = jwt.sign({
            userId: user._id
        },
            process.env.SECRET_KEY,
            {
                expiresIn: '1h'
            }
        );

        const refreshToken = jwt.sign({
            userId: user._id,
        },
            process.env.SECRET_KEY,
            {
                expiresIn: '30d'
            }
        );

        res.cookie('access_token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        });

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({ message: 'Connexion réussie !' });

    } catch (e) {
        return res.status(500).json({ message: `Erreur serveur lors de la connexion : ${e}` });
    }
}

exports.refreshTokenLogin = async (req, res) => {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) return res.status(401).json({ message: 'Utilisateur non authentifié' });

    try {
        const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);

        const newToken = jwt.sign({
            userId: decoded.userId
        },
            process.env.SECRET_KEY,
            {
                expiresIn: '1h'
            }
        );

        res.cookie('access_token', newToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        });

        return res .json({ message: 'Nouveau token généré' });

    } catch (e) {
        return res.status(403).json({ message: `Refresh token invalide ou expiré : ${e}` });
    }
}

exports.me = async (req, res) => {
    const token = req.cookies.access_token;

    if(!token) return res.status(401).json({ message: 'Utilisateur non authentifié' });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decoded.userId);


        return res.status(200).json({ message: 'Utilisateur connecté', user: user });

    } catch(e) {
        return res.status(401).json({ message: 'Token invalide ou expiré '});
    }
}

exports.logout = async (req, res) => {
    res.clearCookie('access_token', {
        httpOnly: true,
        sameSite: 'lax'
    });

    res.clearCookie('refresh_token', {
        httpOnly: true,
        sameSite: 'lax'
    });

    return res.status(200).json({ message: 'Déconnexion réussie'});
}