export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (user_id, username) => ({
  type: LOGIN_SUCCESS,
  payload: { user_id, username },
});
