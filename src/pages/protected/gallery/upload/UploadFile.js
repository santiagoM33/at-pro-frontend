
export const getImages = () =>{

}

export const uploadImages = (files) => {
        const formData = new FormData();
        formData.append('upload_preset', 'x8fap1yq')
        formData.append('file', files)
        formData.append('cloud_name', 'imagesatpro')

        const config = {
            method: 'POST',
            body: formData
        }

        const URI =  'https://api.cloudinary.com/v1_1/imagesatpro/image/upload/';
        const promise = new Promise(async (response, reject) => {
            try{
                const res = await fetch(URI, config)
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
