const BASE_URI = 'http://159.65.218.115';

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

//Funciona como isMounted() 
export const makeCancelable = (promise) => {
    let hasCanceled_ = false;
  
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then((val) =>
        hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
      );
      promise.catch((error) =>
        hasCanceled_ ? reject({isCanceled: true}) : reject(error)
      );
    });
  
    return {
      promise: wrappedPromise,
      cancel() {
        hasCanceled_ = true;
      },
    };
  };

  export const getData = async () => {
    const URI = `http://localhost:8005`;
    const promise = new Promise(async (response, reject) => {
        try{
            const res = await fetch(`${URI}/images`)
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