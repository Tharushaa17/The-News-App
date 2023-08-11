import axios from 'axios';
const urlRegister = 'http://localhost:5000/api/v1/today/singup';
const urlLoggin = 'http://localhost:5000/api/v1/today/login';

export const fetchPosts = () => axios.get(urlLoggin);

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(urlRegister, newUser)
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export const logginUser = async (newUser) => {
  try {
    const response = await axios.post(urlLoggin, newUser)
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
