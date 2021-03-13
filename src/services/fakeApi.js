 export const saveComment = async (postId, comment) => {
    const BASE_URI = 'http://localhost:8010';
    const requestData = {
        method: 'POST',
        body: JSON.stringify({ postId, comment }),
        headers: new Headers({ 'Content-type': 'application/json' })
    }

    const promise = new Promise(async (res, rej) => {
        try {
            const resp = await fetch(`${BASE_URI}/comments`, requestData);
            const body = await resp.json();
            if (resp.ok) { return res(body) }
            else { return rej(body) }
        } catch (err) {
            return rej({ errors: [err] });
        }
    });

    return promise;
}


export const saveImages = async data => {

    const uri = 'http://localhost:8005/images';

    await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    });
}

export const saveFileNames = async data => {

    const uri = 'http://localhost:8005/files';

    await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    });
}


export const saveUsers = async data => {
    const BASE_URI = 'http://localhost:8005';
    const requestData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-type': 'application/json' })
    }

    const promise = new Promise(async (res, rej) => {
        try {
            const resp = await fetch(`${BASE_URI}/users`, requestData);
            const body = await resp.json();
            if (resp.ok) { return res(body) }
            else { return rej(body) }
        } catch (err) {
            return rej({ errors: [err] });
        }
    });
    return promise;
}

export const getComments = async () => {
    const URI = `http://localhost:8010`;
    const promise = new Promise(async (response, reject) => {
        try{
            const res = await fetch(`${URI}/comments`)
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