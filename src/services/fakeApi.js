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

    const uri = 'http://localhost:8005/users';

    await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    });
}

export const getData = async query => {

    const uri = `http://localhost:8005/${query}`;

    const res = await fetch(uri);
    const queryJSON = await res.json();
    return queryJSON;
}

