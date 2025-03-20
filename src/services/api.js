const urlApi = "http://localhost:8080/users";

async function fetchLogin() {
    const res = await fetch(urlApi);
    const data = await res.json();
    return data;
}

async function createUser(newUser) {

    const res = await fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res;
}