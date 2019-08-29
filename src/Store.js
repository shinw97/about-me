import {createStore, applyMiddleware} from 'redux';
import {reducer} from './Reducers/reducer';
import thunk from 'redux-thunk';

let initialStates = {

};

export const store = createStore(reducer, initialStates,
    applyMiddleware(thunk));