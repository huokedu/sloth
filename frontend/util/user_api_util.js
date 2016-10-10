export const fetchAllUsers = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/users',
    success,
    error,
  });
};
