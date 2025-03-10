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

    isLogged ? showNotification("success", "Login efetuado com sucesso!") : showNotification("error", "E-mail ou senha inválidos!");
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

function showNotification(type, message) {
    const modal = document.querySelector("#modal");
    const modalHeader = document.querySelector("#modal_header");
    const modalBody = document.querySelector("#modal_body");
    
    const colorNotification = type == "success" ? "#4CAF50" : "#FF0000";
    const textHeader = type == "success" ? "Sucesso!" : "Login inválido!";

    modalHeader.style.backgroundColor = colorNotification;
    modalHeader.textContent = textHeader;

    modalBody.style.borderLeft = `0.5px solid ${colorNotification}`;
    modalBody.style.borderRight = `0.5px solid ${colorNotification}`;
    modalBody.style.borderBottom = `0.5px solid ${colorNotification}`;
    modalBody.textContent = message;

    modal.classList.toggle("show");
    setTimeout(() => {
        modal.classList.toggle("show");
    }, 2000);
}