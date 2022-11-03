import axios from "axios"

export function setLocale(locale) {
    alert(locale)
    return {
        type: 'SET_LOCALE',
        locale
    }
}

export function getApiData(path) {
    return axios.get(path, {
        headers: {
            'Authorization': `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
        }
    }).then(response => {
        return response.data
    }).catch(err => {
        throw err;
    });
}

export const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

