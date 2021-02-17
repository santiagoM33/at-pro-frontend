const BASE_URI = 'http://159.65.218.115';

export const registerDataAccount = async data => {
    let ep = '/register'
    try{
        await fetch(`${BASE_URI}${ep}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        })
    } catch(err) {
        console.log('Problemas para registrar los datos')
    }
}

export const loginAccountAuth = async data => {
    const uri = '/login';
    const res = await fetch(`${BASE_URI}${uri}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    })
    return res;
}

export const signIn = data => {
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
