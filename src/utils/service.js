const BASE_URL = process.env.REACT_APP_BASE_URL;

export const formServices = {

    postFormData: (data) => {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + '/api/user/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_BEARER,
                
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    },
    postAddressData : (data)=>{
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + '/api/prev-user/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_BEARER,
                
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}