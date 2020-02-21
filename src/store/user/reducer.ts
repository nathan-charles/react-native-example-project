import { FETCH_USER_SUCCESS, UserActionTypes } from './types';

const initialState: UserState = {
  all: [],
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        all: action.payload,
      };
    }
    default:
      return state;
  }
}
