export const ADD_FOLDER = 'ADD_FOLDER';
export const SET_FOLDER = 'SET_FOLDER';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';
export const ALL_FOLDER = 'ALL_FOLDER';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addFolderAction = (payload: any) => {
  return {
    type: ADD_FOLDER,
    payload: payload,
  };
};

export const setFolderAction = (payload: any) => {
  return {
    type: SET_FOLDER,
    payload: payload,
  };
};

export const removeFolderAction = (payload: any) => {
  return {
    type: REMOVE_FOLDER,
    payload: payload,
  };
};

export const allFolderAction = (payload: any) => {
  return {
    type: ALL_FOLDER,
    payload: payload,
  };
};

export const addTodoAction = (payload: any) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const toggleTodoAction = (payload: any) => {
  return {
    type: TOGGLE_TODO,
    payload: payload,
  };
};

export const removeTodoAction = (payload: any) => {
  return {
    type: REMOVE_TODO,
    payload: payload,
  };
};
