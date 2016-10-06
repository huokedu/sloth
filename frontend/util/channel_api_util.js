export const fetchAllChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/channels',
    success,
    error,
  });
};

export const createChannel = (success, error, channelParams) => {
  $.ajax({
      method: 'POST',
      url: 'api/channels',
      data: channelParams,
      success,
      error,
  });
};
