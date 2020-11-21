export default {
    async getResource(path, method, data, headers) {
        // eslint-disable-next-line no-useless-catch
        try {
            method = !method ? 'GET' : method

            let options = {
                method: method,
                headers: {
                    'Content-type': 'application/json'
                }
            }
            if (data) {
                options.body = JSON.stringify(data)
            }

            if (headers) Object.assign(options.headers, headers)

            let response = await fetch('http://127.0.0.1:3030/api' + path, options)

            if (response.status != 200) {
                let err = await response.json()
                throw new Error(err.message)
            }
            return await response.json()
        } catch (error) {
            throw error

        }
    }

}