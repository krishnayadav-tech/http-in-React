import axios from 'axios';
const instance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/"
});
export default instance;

//import it in your project and you are done and you can create multiple instace of axios