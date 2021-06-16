import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';

const middleware:any = [
   
];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));


export default store;