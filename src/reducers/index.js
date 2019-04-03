import { combineReducers } from 'redux';

import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default rootReducer;
