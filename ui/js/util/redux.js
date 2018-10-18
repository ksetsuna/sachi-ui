import {mapValues} from 'lodash';
import {bindActionCreators} from 'redux';

export const bind = defs => dispatch => ({dispatch, ...mapValues(defs, v => bindActionCreators(v, dispatch))});

export const createReducer = function createReducer(initialState, handlers, delegate) {
    if(typeof delegate === 'function')
        return function reducer(state = initialState, action = {}) {
            if(handlers.hasOwnProperty(action.type)) {
                return handlers[action.type](state, action);
            } else if(delegate) {
                return delegate(state, action);
            } else {
                return state;
            }
        };
    else
        return function reducer(state = initialState, action = {}) {
            if(handlers.hasOwnProperty(action.type)) {
                return handlers[action.type](state, action);

            } else {
                return state;
            }
        };
};
