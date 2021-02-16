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