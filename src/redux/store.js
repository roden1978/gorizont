import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";
import {applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
//Reducers
import news_reducer from './reducers/newsReducer'
import projects_reducer from './reducers/projectsReducer'

let reducers = combineReducers({
    news: news_reducer,
    projects: projects_reducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;