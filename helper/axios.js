import axios from 'axios';
import Cookie from 'js-cookie';

const axiosApiInstances = axios.create({
    baseURL: 'https://fazzpay.herokuapp.com'
});

// add a req interceptor
axiosApiInstances.interceptors.request.use((config) => {
    config.headers = {
        Authorization: `Bearer ${Cookie.get('token')}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// add a respon interceptor
axiosApiInstances.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error.response)
    if (error.response.status === 403) {
        Cookie.remove('token');
        window.location.href = 'auth/login'
    }
    return Promise.reject(error);
});

export default axiosApiInstances;