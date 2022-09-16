
import axios from 'axios';



const lazaroApi = axios.create({
    baseURL: '/api'
});


export default lazaroApi;


