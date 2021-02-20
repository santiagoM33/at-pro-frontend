const BASE_URI = 'http://159.65.218.115';

export const loginAccountAuth = data => {
    const requestData = {
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
        .catch(err => console.log(err))
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

export const resetPasswordRequest = async email => {
    const requestData = {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: new Headers({ 'Content-type': 'application/json' })
    }

    const promise = new Promise(async (res, rej) => {
        try {
            const resp = await fetch(`${BASE_URI}/reset-password-request`, requestData);
            const body = await resp.json();
            if (resp.ok) { return res(body) }
            else { return rej(body) }
        } catch (err) {
            return rej({ errors: [err] });
        }
    });

    return promise;
}

export const resetPassword = async (email, password, code) => {
    const requestData = {
        method: 'POST',
        body: JSON.stringify({ email, password, code }),
        headers: new Headers({ 'Content-type': 'application/json' })
    }

    const promise = new Promise(async (res, rej) => {
        try {
            const resp = await fetch(`${BASE_URI}/reset-password`, requestData);
            const body = await resp.json();
            if (resp.ok) { return res(body) }
            else { return rej(body) }
        } catch (err) {
            return rej({ errors: [err] });
        }
    });

    return promise;
}
