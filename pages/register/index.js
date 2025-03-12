const buttonSubmit = document.querySelector('#buttonSubmit');
const iptName = document.querySelector('#ipt_name');
const iptEmail = document.querySelector('#ipt_email');
const iptPassword = document.querySelector('#ipt_password');

buttonSubmit.addEventListener('click', event => {
    event.preventDefault();
    handleRegister();
});

const inputErrorMessages = {
    name: {
        isEmpty: 'Nome é obrigatório'
    },
    email: {
        isEmpty: 'Email é obrigatório',
        emailFormatIsInvalid: 'Formato inválido'
    },
    password: {
        isEmpty: 'Senha é obrigatória',
        passwordLengthIsinvalid: 'Deve ter no mínimo 8 caracteres',
        passwordHasNoSpecialCharacter: 'Deve ter no mínimo 1 caractereespecial'
    }
}

function handleRegister() {
    const { isNameValid, errorName } = validateName(iptName);
    const { isEmailValid, errorEmail } = validateEmail(iptEmail);
    const { isPasswordValid, errorPassword } = validatePassword(iptPassword);

    showErrorMessage(iptName, errorName);
    showErrorMessage(iptEmail, errorEmail);
    showErrorMessage(iptPassword, errorPassword);

    console.log(isNameValid, isEmailValid, isPasswordValid);
    if(isNameValid && isEmailValid && isPasswordValid){
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
    const errorName = isEmpty ? inputErrorMessages.name.isEmpty : "";

    return { isNameValid: !isEmpty, errorName };
}

function validateEmail(iptEmail) {
    const emailFormatted = formatInputEmail(iptEmail.value);

    const isEmailEmpty = isEmptyInput(emailFormatted);
    const isEmailFormatValid = validateEmailFormat(emailFormatted);

    let errorEmail = "";

    if(!isEmailFormatValid) {
        errorEmail = inputErrorMessages.email.emailFormatIsInvalid;
    }

    if(isEmailEmpty) {
        errorEmail = inputErrorMessages.email.isEmpty;
    }
    
    return { isEmailValid: !isEmailEmpty && isEmailFormatValid, errorEmail };
}

function validatePassword(iptPassword) {
    const passwordFormatted = formatInputPassword(iptPassword.value);

    const isPasswordEmpty = isEmptyInput(passwordFormatted);
    const passwordLengthIsValid = hasValidLength(passwordFormatted);
    const passwordHasSpecialCharacter = hasSpecialCharacter(passwordFormatted);

    let errorPassword = "";

    if(!passwordHasSpecialCharacter) {
        errorPassword = inputErrorMessages.password.passwordHasNoSpecialCharacter;
    }
    
    if(!passwordLengthIsValid) {    
        errorPassword = inputErrorMessages.password.passwordLengthIsinvalid;
    }

    if(isPasswordEmpty) {
        errorPassword = inputErrorMessages.password.isEmpty;
    }

    return { isPasswordValid: !isPasswordEmpty && passwordLengthIsValid && passwordHasSpecialCharacter, errorPassword };
}

function showErrorMessage(element, message) {
    element.nextElementSibling.style.display = 'block';
    element.nextElementSibling.innerText = message;
}

function hideErrorMessage(element, message) {
    element.nextElementSibling.style.display = 'none';
    element.nextElementSibling.innerText = message;
}