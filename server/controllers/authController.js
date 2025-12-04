const User = require('../schemas/userSchemas');
const { hashPassword } = require('../utils/passwordHasher');

exports.register = async (req, res) => {

    try {
        const { pseudo, email, password } = req.body;

        if (!pseudo || !email || !password) {
            return res.status(400).json({ message: 'Tous les champs sont requis !'})
        }

        if(password.length < 8) {
            return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caractères'})
        }
        
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: 'Adresse mail déjà utilisée !'});
        }
        
        const hashedPassword = await hashPassword(password);

        await User.create({
            pseudo,
            email,
            password: hashedPassword
        });

        return res.status(200).json({ message: 'Utilisateur créé avec succès !'})

    } catch (e) {
        return res.status(500).json({ message: `Erreur serveur lors de la création de l'utilisateur : ${e}`});
    }
}