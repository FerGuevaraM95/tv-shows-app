import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers/rootReducer";

// Dev
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Production
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
