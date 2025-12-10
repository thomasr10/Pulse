const User = require('../schemas/userSchemas');
const Channel = require('../schemas/channelSchema');

exports.getUserConversation = async (req, res) => {
// A améliorer, ossature de la fonction :
    try {
        const { userId } = req.params;
        const userDM = await Channel.find({ type: 'dm', users: userId });

        if (userDM.length === 0) {
            return res.status(204).json({ message: 'Aucune conversation'});
        }
        
        return res.status(200).json({ message: 'oui', userDM})
    } catch (e) {
        return res.status(401).json({ message: 'non'});
    }
}