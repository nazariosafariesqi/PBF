const GetAPI = (path) => {
    const promise = new Promise(executor= (resolve, reject) => {
        fetch(input= `${domainPath}/${path}`)
            .then(response => response.json())
            .then((result ) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    return promise;
}