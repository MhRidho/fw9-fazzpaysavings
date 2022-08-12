import axios from 'axios';

const axiosApiInstances = axios.create({
    baseURL: 'https://fazzpay.herokuapp.com/'
});

export default axiosApiInstances;