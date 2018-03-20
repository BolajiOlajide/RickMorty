import { combineReducers } from 'redux';

import characters from './character.reducer';
import auth from './auth.reducer';


const rootReducer = combineReducers({
  auth,
  characters
});

export default rootReducer;
