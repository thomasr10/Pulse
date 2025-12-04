const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.verifyCookie = async (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(400).json({ message: 'Utilisateur non authentifié'});

    try {
         const decoded = jwt.verify(token, process.env.SECRET_KEY);
         req.userId = decoded.userId;
         next();
    } catch(e) {
        return res.status(403).json({ message: 'Token invalide ou expiré' });
    }
}