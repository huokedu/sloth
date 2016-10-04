export const signUp = (success, error, params) => {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: params,
    success,
    error,
  });
};

export const signIn = (success, error, params) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: params,
    success,
    error,
  });
};

export const signOut = (complete) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
    complete,
  });
};
