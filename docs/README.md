# Sloth

[Heroku link](http://www.herokuapp.com)

## Minimum Viable Product

Sloth is a web application inspired by Slack built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Live chat
- [ ] Channels
- [ ] Direct messaging
- [ ] Multi-person direct messaging
- [ ] Search
- [ ] Notifications
- [ ] Production README

## Design Docs

* [View wireframes](wireframes)
* [React components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB schema](schema.md)
* [Redux structure](redux-structure.md)
* [Sample state](sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Messages Model, API, and components (2 days)

**Objective:** Messages can be created, read, edited and destroyed through
the API.

- [ ] `Message` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for messages (`MessagesController`)
- [ ] JBuilder views for messages
- Message components and respective Redux loops
  - [ ] `MessagesIndex`
  - [ ] `MessageIndexItem`
  - [ ] `MessageForm`
- Websockets for live chat functionality
- [ ] Seed messages

### Phase 3: Channels (2 days)

**Objective:** Messages belong to Channels that can be created, read, edited and destroyed through the API.

- [ ] `Channel` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for channels (`ChannelsController`)
- [ ] JBuilder views for channels
- [ ] Channels are either public or direct
- [ ] Adding message requires a channel
- [ ] Viewing messages by channel
- [ ] Channel search shows list of channel suggestions
- [ ] Style channel components
- [ ] Seed channels

### Phase 4: Notifications (1 days)

**objective:** Unfocused channels show notification count.

- [ ] Channels that aren't currently open will show notifications
- [ ] Notifications disappear after channel is open

### Phase 5: Message Search (2 days)

**Objective:** Search within a channel for a message

- [ ] Searches by user and by message body
- [ ] Autocompletes
- [ ] Generates results component on submission

### Bonus Features (TBD)
- [ ] Reactions
- [ ] Commands
