import * as api from '../api/userAPI';

export const createUser = (user) => async (dispatch) => {
    try {
      const {data} = await api.createUser(user)
      dispatch({ type: 'CREATE', payload: data })
      console.log(user);
      console.log('done!');
    } catch (error) {
      console.log(error.message);
      console.log('not work');
    }
  }