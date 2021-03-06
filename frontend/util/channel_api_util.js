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

export const subscribeToChannel = (success, error, channelId) => {
  $.ajax({
    method: 'POST',
    url: `api/channels/${channelId}/subscription`,
    success,
    error,
  });
};

export const unsubscribeFromChannel = (success, error, channelId) => {
  $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}/subscription`,
    success,
    error,
  });
};

export const createDirectMessage = (success, error, channelParams) => {
  $.ajax({
    method: 'POST',
    url: 'api/direct_messages',
    data: channelParams,
    success,
    error,
  });
};

export const clearNotifications = (complete, channelId) => {
  $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}/notifications`,
    complete
  });
};

export const fetchSubscribedChannels = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/subscriptions',
    success,
  });
};
