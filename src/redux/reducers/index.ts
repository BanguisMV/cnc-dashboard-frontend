import { combineReducers } from 'redux';
import auth from './AuthReducer';
import UserReducer from './UserReducer'
const rootReducer = combineReducers({
    auth,
    user:UserReducer
});

export default rootReducer;