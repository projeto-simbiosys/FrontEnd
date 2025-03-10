const urlApi = "http://localhost:8080";

const buttonSubmit = document.querySelector('#buttonSubmit');

buttonSubmit.addEventListener('click', event => {
    event.preventDefault();
    handleLogin();
});

async function handleLogin() {
    const iptEmail = document.querySelector('#ipt_email');
    const iptPassword = document.querySelector('#ipt_password');
    
    const isLogged = await verifyLogin(iptEmail.value, iptPassword.value);

    isLogged ? alert("Login efetuado com sucesso!") : alert("Login inválido!");
}

async function verifyLogin(email, password) {
    const user = await fetchLogin();

    const emailIsValid = verifyEmail(email, user[0]?.email);
    const passwordIsValid = verifyPassword(password, user[0]?.password);

    return emailIsValid && passwordIsValid;
}

async function fetchLogin() {
    const res = await fetch(`${urlApi}/users`);
    const data = await res.json();
    return data;
}

function verifyEmail(iptEmail, apiEmail) {
    return iptEmail == apiEmail;
}

function verifyPassword(iptPassword, apiPassword) {
    return iptPassword == apiPassword;
}