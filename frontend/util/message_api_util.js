export const fetchCurrentMessages = (success, error, channelId) => {
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}/messages`,
    success,
    error,
  });
};

export const createMessage = (success, error, messageParams) => {
  $.ajax({
    method: 'POST',
    url: `api/channels/${messageParams.channelId}/messages`,
    data: messageParams,
    success,
    error,
  });
};

export const updateMessage = (success, error, messageParams) => {
  $.ajax({
    method: 'PATCH',
    url: `api/messages/${messageParams.id}`,
    data: messageParams,
    success,
    error,
  });
};

export const deleteMessage = (success, error, messageId) => {
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${messageId}`,
    success,
    error,
  });
};
