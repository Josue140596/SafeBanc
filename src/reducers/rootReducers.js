import {combineReducers} from 'redux';

// MenuHam
import { menuHamReducers } from './menuHamReducers';

export const rootReducers = combineReducers({
    menuHam: menuHamReducers
})
