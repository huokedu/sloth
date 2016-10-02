## Auth Cycles

### Session API Request Actions

* `signUp`
  1. invoked from `AuthForm` `onSubmit`
  2. `POST /api/users` is called.
  3. `receiveCurrentUser` is set as the success callback.
* `signIn`
  1. invoked from `AuthForm` `onSubmit`
  2. `POST /api/session` is called.
  3. `receiveCurrentUser` is set as the callback.
* `logOut`
  1. invoked from `Sidebar` `onClick`
  2. `DELETE /api/session` is called.
  3. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  1. invoked from `App` in `didMount`
  2. `GET /api/session` is called.
  3. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  1. invoked from an API callback
  2. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  1. invoked from an API callback
  2. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  1. invoked from API callbacks on error for actions that generate POST requests
  2. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  1. invoked from API callbacks on success for actions that generate POST requests
  2. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Channel Cycles

### Channels API Request Actions

* `fetchAllChannels`
  1. invoked from `ChannelsIndex` `didMount`/`willReceiveProps`
  2. `GET /api/channels` is called.
  3. `receiveAllChannels` is set as the success callback.

* `createChannel`
  1. invoked from new channel button `onClick`
  2. `POST /api/channels` is called.
  3. `receiveChannel` is set as the success callback.

* `fetchChannel`
  1. invoked from `Channel` `didMount`/`willReceiveProps`
  2. `GET /api/channels/:id` is called.
  3. `receiveChannel` is set as the success callback.

* `updateChannel`
  1. invoked from `Channel` `onSubmit`
  2. `PATCH /api/channels/:id` is called.
  3. `receiveChannel` is set as the success callback.

* `destroyChannel`
  1. invoked from delete channel button `onClick`
  2. `DELETE /api/messages/:id` is called.
  3. `removeChannel` is set as the success callback.

### Channels API Response Actions

* `receiveAllChannels`
  1. invoked from an API callback
  2. the `ChannelReducer` updates `channels` in the application's state.

* `receiveChannel`
  1. invoked from an API callback
  2. the `ChannelReducer` updates `channels[id]` in the application's state.

* `removeChannel`
  1. invoked from an API callback
  2. the `ChannelReducer` removes `channels[id]` from the application's state.

## Messages Cycles

### Messages API Request Actions

* `fetchAllMessages`
  1. invoked from `MessagesIndex` `didMount`/`willReceiveProps`
  2. `GET /api/messages` is called.
  3. `receiveAllMessages` is set as the success callback.

* `createMessage`
  1. invoked from new message button `onClick`
  2. `POST /api/messages` is called.
  3. `receiveSingleMessage` is set as the callback.

* `updateMessage`
  1. invoked from `MessageForm` `onSubmit`
  2. `PATCH /api/messages/:id` is called.
  3. `receiveSingleMessage` is set as the success callback.

* `destroyMessage`
  1. invoked from delete message button `onClick`
  2. `DELETE /api/message/:id` is called.
  3. `removeMessage` is set as the success callback.

### Message API Response Actions

* `receiveAllMessages`
  1. invoked from an API callback.
  2. The `Message` reducer updates `Messages` in the application's state.

* `receiveSingleMessage`
  1. invoked from an API callback.
  2. The `Messages` reducer updates `messages[id]` in the application's state.

* `removeMessage`
  1. invoked from an API callback.
  2. The `Messages` reducer removes `messages[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  1. invoked from `ChannelSearch` `onChange` when there is text
  2. `GET /api/channels` is called with `text` param.
  3. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  1. invoked from an API callback.
  2. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  1. invoked from `ChannelSearch` `onChange` when empty
  2. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
