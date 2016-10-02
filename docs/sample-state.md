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
      messages: [
        {id: 1, author: 'buttercup', body: 'palmate or pinnate?'},
        {id: 2, author: 'sid', body: 'i like both'},
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
      messages: [
        {id: 1, author: 'buttercup', body: 'dude, wake up!'},
        {id: 2, author: 'sid', body: 'sorry i overslept again'},
      ],
    },
  },
}
```
