import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as t from './types';

export const fetchAllUsers = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    dispatch({
      type: t.FETCH_USER_SUCCESS,
      payload: users,
    });

    return Promise.resolve();
  } catch (error) {
    console.log(error);

    return Promise.reject(error);
  }
};
