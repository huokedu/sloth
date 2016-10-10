export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS,
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});
