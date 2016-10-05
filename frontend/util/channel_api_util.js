export const fetchAllChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/channels',
    success,
    error,
  });
};
