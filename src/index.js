import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducer from "./store/reducers/reducer.js";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.css";

const rootReducer = combineReducers({
    reducer: reducer
});


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));
// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
