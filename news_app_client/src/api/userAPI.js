import axios from 'axios';

const urlRegister = 'http://localhost:5000/api/v1/today/singup';
const urlLoggin = 'http://localhost:5000/api/v1/today/login';

export const fetchPosts = () => axios.get(urlLoggin);

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(urlRegister, newUser);
    console.log(response.data);
    return response.data; // You can return the data if needed
  } catch (error) {
    console.log(error.message);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};

export const logginUser = async (newUser) => {
  try {
    const response = await axios.post(urlLoggin, newUser);
    console.log(response.data);
    return response.data; // You can return the data if needed
  } catch (error) {
    console.log(error.message);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};
