import { combineReducers } from 'redux';
import { folderReducer } from './folder-reducer';

export const rootReducer = combineReducers({
  folders: folderReducer,
});
