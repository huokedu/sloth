```js
{
  currentUser: {
    id: 1,
    username: "buttercup",
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    createChannel: {errors: []},
  },
  currentChannel: 1,
  channels: {
    1: {
      name: 'folivores',
      purpose: 'talk about your favorite arboreal appendages',
      creator_id: 1,
      members: [
        {id: 1, username: 'buttercup'},
        {id: 2, username: 'sid'},
      ],
    },
    2: {
      name: '@buttercup,sid',
      purpose: "",
      creator_id: 1,
      members: [
        {id: 1, username: 'buttercup'},
        {id: 2, username: 'sid'},
      ],
    },
  },
  messages: {
    1: {
      channel_id: 1,
      author_id: 1,
      body: "palmate or pinnate?",
    },
    2: {
      channel_id: 1,
      author_id: 2,
      body: 'i like both',
    },
    3: {
      channel_id: 2,
      author_id: 1,
      body: 'dude, wake up!',
    }
    4: {
      channel_id: 2,
      author_id: 2,
      body: 'sorry i overslept again',
    }
  }
}
```
