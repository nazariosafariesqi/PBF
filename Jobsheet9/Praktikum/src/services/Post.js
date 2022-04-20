const PostAPI = (path) => {
    const promise = new Promise(executor= (resolve, reject) => {
        fetch(input= `${domainPath}/${path}`, init= {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result = Response ) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}