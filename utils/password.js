function hasValidLength(password) {
    return password.length >= 8;
}

function hasSpecialCharacter(password) {
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return specialCharRegex.test(password);
}

function formatInputPassword(password) {
    return password.trim();
}