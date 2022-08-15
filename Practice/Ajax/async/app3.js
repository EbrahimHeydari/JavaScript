const myFunc = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000)
    })

    const error = false

    if (!error) {
        const res = await promise // Wait until promise is resolved
        return res
    }
    else {
        await promise.reject(new Error('Something went wrong'))
    }
}

myFunc()
    .then(res => console.log(res))
    .catch(error => console.log(error))