const buttonSubmit = document.querySelector('#buttonSubmit');
const iptName = document.querySelector('#ipt_name');
const iptEmail = document.querySelector('#ipt_email');
const iptPassword = document.querySelector('#ipt_password');
const iptPasswordConfirm = document.querySelector('#ipt_password_confirm');

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
        passwordHasNoSpecialCharacter: 'Deve ter no mínimo 1 caractereespecial',
        passwordIsNotEqual: 'As senhas devem ser iguais'
    }
}

function handleRegister() {
    const { isNameValid, errorName } = validateName(iptName);
    const { isEmailValid, errorEmail } = validateEmail(iptEmail);
    const { isPasswordValid, errorPassword } = validatePassword(iptPassword);
    const { isPasswordConfirmValid, errorPasswordConfirm } = validatePasswordConfirm(iptPassword, iptPasswordConfirm);

    showErrorMessage(iptName, errorName);
    showErrorMessage(iptEmail, errorEmail);
    showErrorMessage(iptPassword, errorPassword);
    showErrorMessage(iptPasswordConfirm, errorPasswordConfirm);

    if(isNameValid && isEmailValid && isPasswordValid && isPasswordConfirmValid){
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

function validatePasswordConfirm(iptPassword, iptPasswordConfirm) {
    const isSamePassword = iptPassword.value === iptPasswordConfirm.value;
    const errorPasswordConfirm = isSamePassword ? "" : inputErrorMessages.password.passwordIsNotEqual;

    return { isPasswordConfirmValid: isSamePassword, errorPasswordConfirm };
}

function showErrorMessage(element, message) {
    element.nextElementSibling.style.display = 'block';
    element.nextElementSibling.innerText = message;
}

function hideErrorMessage(element, message) {
    element.nextElementSibling.style.display = 'none';
    element.nextElementSibling.innerText = message;
}