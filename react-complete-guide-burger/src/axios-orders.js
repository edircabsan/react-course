import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7e299.firebaseio.com/'
});

export default instance;