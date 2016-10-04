export const signUp = (success, error, params) => {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: params,
  });
};

export const signIn = (success, error, params) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: params,
  });
};

export const signOut = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
};
