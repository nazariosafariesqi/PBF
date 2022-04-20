const DeleteAPI = (path, data) => {
    const promise = new Promise(executor= (resolve, reject) => {
        fetch(input= `${domainPath}/${path}/${data}`, init= {
            method: 'DELETE'})
            .then((result = Response ) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
}