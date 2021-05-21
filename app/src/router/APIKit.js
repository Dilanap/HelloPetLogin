//<ROOT>/shared/APIKit.js
import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'http://tugasakhirbc8.herokuapp.com',
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (tokenType) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${tokenType}`;
    return config;
  });
};

export default APIKit;
