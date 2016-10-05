export const fetchSubscribedChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/channels',
    success,
    error,
  });
};
