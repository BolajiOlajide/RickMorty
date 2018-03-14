import { combineReducers } from 'redux';

import characters from './character.reducer';


const rootReducer = combineReducers({
  characters
});

export default rootReducer;
