const BASE_URI = 'http://159.65.218.115';

export const loginAccountAuth = data => {
    const requestData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-type': 'application/json' })
    }

    return fetch(`${BASE_URI}/login`, requestData)
        .then(resp => {
            return resp.json()
        })
        .catch(err => err);

    /* const requestData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({'Content-type': 'application/json'})
    }
    fetch(`${BASE_URI}/login`, requestData)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('Login invalido...')
        })
        .then(token=> console.log(token))
        .catch(err => console.log(err)) */
}

export const registerDataAccount = async data => {
    const requestData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({'Content-type': 'application/json'})
    }

    try{
        await fetch(`${BASE_URI}/register`, requestData)
    } catch(err) {
        console.log('Problemas para registrar los datos', err)
    }
}
