# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Messages

- `GET /api/messages/`
  - Messages for current channel
  - accepts `channel` query param
- `POST /api/messages`
- `GET /api/messages/:id`
- `PATCH /api/messages/:id`
- `DELETE /api/messages/:id`

### Channels

- `GET /api/channels`
- `POST /api/channels`
- `GET /api/channels/:id`
- `DELETE /api/channels/:id`
- `GET /api/channels/:id/notes`
  - index of all channels
