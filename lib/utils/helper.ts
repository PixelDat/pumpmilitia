export class Helpers {

    static isValidPassword(password: string) {
        const errors = [];
        // Check for minimum 8 characters
        if (password.length < 8) {
            errors.push('min');
        }
        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            errors.push('ucl');
        }
        // Check for at least one symbol or non-word character
        if (!/\W/.test(password)) {
            errors.push('sym');
        }

        return errors.length === 0 ? true : errors;
    }


}
