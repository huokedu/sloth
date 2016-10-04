export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signUp = (user) => ({
  type: SIGN_UP,
  user,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});
