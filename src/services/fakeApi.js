export const saveData = async data => {

    const uri = 'http://localhost:8005/images';

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

