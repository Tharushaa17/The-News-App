import axios from 'axios';

const url = 'http://localhost:5000/api/v1/today/singup'

// export const fetchPosts = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);