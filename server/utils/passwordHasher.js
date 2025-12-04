const bcrypt = require('bcrypt');
const saltRound = 10;

exports.hashPassword = async (clearPassword) => {

    try {
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPassword = bcrypt.hash(clearPassword, salt);

        return hashedPassword;

    } catch (e) {
        console.error(e);
        throw new Error(e);
    }

}