const buttonSubmit = document.querySelector('#buttonSubmit');
const iptName = document.querySelector('#ipt_name');
const iptEmail = document.querySelector('#ipt_email');
const iptPassword = document.querySelector('#ipt_password');

buttonSubmit.addEventListener('click', event => {
    event.preventDefault();
    handleRegister();
});

function handleRegister() {
    const nameIsValid = validateName(iptName);
    const emailIsValid = validateEmail(iptEmail);
    const passwordIsValid = validatePassword(iptPassword.value);

    if(nameIsValid && emailIsValid && passwordIsValid){
        const newUser = {
            name: iptName.value,
            email: iptEmail.value,
            password: iptPassword.value
        }

        console.log("conta cadastrada: ", newUser);
    }
}

function validateName(iptName) {
    const isEmpty = isEmptyInput(iptName.value);
    return isEmpty;
}

function validateEmail(iptEmail) {
    const emailFormatted = formatInputEmail(iptEmail.value);

    const isEmpty = isEmptyInput(emailFormatted);
    const emailFormatIsValid = validateEmailFormat(emailFormatted);
    
    return { isEmpty, emailFormatIsValid };
}

function validatePassword(iptPassword) {
    const passwordFormatted = formatInputPassword(iptPassword.value);

    const isEmpty = isEmptyInput(passwordFormatted);
    const passwordLengthIsValid = hasValidLength(passwordFormatted);
    const passwordHasSpecialCharacter = hasSpecialCharacter(passwordFormatted);

    return { isEmpty, passwordLengthIsValid, passwordHasSpecialCharacter };
}

function showErrorMessage(element, message) {
    element.nextElementSibling.style.display = 'block';
    element.nextElementSibling.innerText = message;
}

function hideErrorMessage(element, message) {
    element.nextElementSibling.style.display = 'none';
    element.nextElementSibling.innerText = message;
}