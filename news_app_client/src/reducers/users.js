export default (user = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...user, action.payload ];
        default:
            return user;
    }
}