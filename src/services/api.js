const BASE_URI = 'http://159.65.218.115';
const token = JSON.parse(localStorage.getItem("token")) ?? null;

export const loginAccountAuth = async data => {
        const requestData = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({'Content-type': 'application/json'})
        }
        const promise = new Promise(async (response, reject) => {
            try{
                const res = await fetch(`${BASE_URI}/login`, requestData)
                const body = await res.json();
                    if (res.ok) {
                        return response(body)
                    } else {
                        return reject(body)
                    }
            } catch (err) {
                reject({errors: [err]})
            }
        })
    return promise;
}
    

export const registerDataAccount = async data => {
    const requestData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({'Content-type': 'application/json'})
    }

    const promise = new Promise(async (response, reject) => {
        try{
            const res = await fetch(`${BASE_URI}/register`, requestData)
            const body = await res.json();
                if (res.ok) {
                    return response(body)
                } else {
                    return reject(body)
                }
        } catch (err) {
            reject({errors: [err]})
        }
    })
    return promise;
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

  
export const getUserStatus = async () => {
    const URI = `http://159.65.218.115`;
    const promise = new Promise(async (response, reject) => {
        try{
            const res = await fetch(`${URI}/users`)
            const body = await res.json();
                if (res !== 0) {
                    return response(body)
                } else {
                    return reject(body)
                }
        } catch (err) {
            reject({errors: [err]})
        }
    })
return promise;
}

export const updateUserData = async (id,data) => {
    const accessToken = token;
    const requestData = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
            'authorization': `Bearer ${accessToken}`, 
            'Content-type': 'application/json'
        })
    }
    const promise = new Promise(async (response, reject) => {
        try{
            const res = await fetch(`${BASE_URI}/users/${id}`, requestData)
            const body = await res.json();
                if (res.ok) {
                    return response(body)
                } else {
                    return reject(body)
                }
        } catch (err) {
            reject({errors: [err]})
        }
    })
return promise;
}