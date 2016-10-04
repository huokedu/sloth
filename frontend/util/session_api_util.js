export const signup = (success, error, params) => {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: params,
  });
};

export const signin = (success, error, params) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: params,
  });
};

export const signout = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
};
