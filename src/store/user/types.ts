export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

type FetchAllSuccessAction = {
  type: typeof FETCH_USER_SUCCESS;
  payload: [User];
};

type FetchAllSuccessAction2 = {
  type: typeof FETCH_USER_SUCCESS;
  payload: [User];
};

export type UserActionTypes = FetchAllSuccessAction | FetchAllSuccessAction2;
