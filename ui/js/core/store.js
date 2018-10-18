import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {enableBatching} from 'redux-batched-actions';
import {reducer as formReducer} from 'redux-form';

import thunkMiddleware from 'redux-thunk';

import initialState from './initialState.yml';

const reducers = combineReducers({
    form: formReducer,
    name: x => x || null
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    enableBatching(reducers),
    initialState,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
);

export default store;