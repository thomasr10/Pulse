const User = require('../schemas/userSchemas');
const { hashPassword } = require('../utils/passwordHasher');
const { ageValidation } = require('../utils/birthDateCompare');

exports.register = async (req, res) => {

    try {
        const { pseudo, email, password, birthDate } = req.body;

        if (!pseudo || !email || !password) {
            return res.status(400).json({ message: 'Tous les champs sont requis !'})
        }

        if(password.length < 8) {
            return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caractères'})
        }

        const isAgeValid = await ageValidation(birthDate);
        if(!isAgeValid) return res.status(400).json({ message: 'Vous devez avoir au moins 13 ans pour vous inscrire !'});
        
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ message: 'Adresse mail déjà utilisée !'});
                
        const hashedPassword = await hashPassword(password);

        await User.create({
            pseudo,
            email,
            password: hashedPassword,
            birthDate: new Date(birthDate)
        });

        return res.status(200).json({ message: 'Utilisateur créé avec succès !'})

    } catch (e) {
        return res.status(500).json({ message: `Erreur serveur lors de la création de l'utilisateur : ${e}`});
    }
}