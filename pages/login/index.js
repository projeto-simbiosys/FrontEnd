const buttonSubmit = document.querySelector('#buttonSubmit');

buttonSubmit.addEventListener('click', event => {
    event.preventDefault();
    handleLogin();
});

async function handleLogin() {
    const iptEmail = document.querySelector('#ipt_email');
    const iptPassword = document.querySelector('#ipt_password');
    
    const isLogged = await verifyLogin(iptEmail.value, iptPassword.value);

    isLogged ? showNotification("success", "Login efetuado com sucesso!") : showNotification("error", "E-mail ou senha inválidos!");
}

async function verifyLogin(email, password) {
    const user = await fetchLogin();

    const emailIsValid = verifyEmail(email, user[0]?.email);
    const passwordIsValid = verifyPassword(password, user[0]?.password);

    return emailIsValid && passwordIsValid;
}

function verifyEmail(iptEmail, apiEmail) {
    return iptEmail == apiEmail;
}

function verifyPassword(iptPassword, apiPassword) {
    return iptPassword == apiPassword;
}