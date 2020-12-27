import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.interceptors.request.use(req=>{
    console.log(req);
    return req;
},err=>{
    return Promise.reject(err);
})

axios.interceptors.response.use(res=>{
    console.log(res);
    return res;
},err=>{
    console.log(err);
    return Promise.reject(err);
})
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
