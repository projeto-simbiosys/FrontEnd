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