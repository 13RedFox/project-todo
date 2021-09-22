import {
  ADD_FOLDER,
  ADD_TODO,
  REMOVE_FOLDER,
  ALL_FOLDER,
  REMOVE_TODO,
  SET_FOLDER,
  TOGGLE_TODO,
} from '../actions/actions';

export const folderReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ADD_FOLDER: {
      return [...state, action.payload];
    }
    case SET_FOLDER: {
      return action.payload;
    }
    case REMOVE_FOLDER: {
      return action.payload;
    }
    case ALL_FOLDER: {
      return action.payload;
    }
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case TOGGLE_TODO: {
      return [...state, action.payload];
    }
    case REMOVE_TODO: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
