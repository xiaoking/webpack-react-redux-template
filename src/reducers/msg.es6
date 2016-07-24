import { createReducer } from 'eg-tools';
import Immutable from 'immutable';

import {actionType} from '../constants/action-type.es6';

const initialState = Immutable.fromJS({
    username:'',
    email:'',
    content:''
});

export const msg = createReducer('msg',initialState, {
});