import {combineReducers} from 'redux';

import adviceReducer from './adviceReducer';
import authReducer from './authReducer';

export default combineReducers({advice: adviceReducer, auth: authReducer});
