exports.ageValidation = (stringBirthDate) =>  {

    try {
        const birthDateTimestamps = new Date(stringBirthDate).getTime();
        const todayTimestamps = new Date().getTime();
        
        const today = new Date();
        const birthday = new Date(stringBirthDate);
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();

        const birthYear = birthday.getFullYear();
        const birthMonth = birthday.getMonth();
        const birthDate = birthday.getDate();

        if (birthDateTimestamps >= todayTimestamps) {
            return false;
        }

        let age = currentYear - birthYear;
        const monthsCompare = currentMonth - birthMonth;

        if (monthsCompare < 0 || (monthsCompare === 0 && currentDate < birthDate)) {
            age--;
        }

        return age >= 13;
        
    } catch (e) {
        throw new Error(`Erreur lors de la comparaison des dates : ${e}`);        
    }
}