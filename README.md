# Brett's Mod Queue

Moderation queue viewer and processor — approve, remove, report, and track queue activity.

## Features

- View pending items in the moderation queue
- Filter by status: All, Pending, Reported, Approved, Removed
- One-click approve/remove/report actions
- Queue threshold alerts

## Installation

1. Go to [Reddit's Developer Platform](https://developers.reddit.com/)
2. Create a new app and upload this package
3. Install on your subreddit

## Development

```bash
npm install
npm run dev
```

## Architecture

```
bretts-mod-queue/
├── devvit.json          # App config, triggers, permissions
├── package.json         # Dependencies (@devvit/* ^0.14.3)
├── server/
│   └── index.js         # Triggers: onAppInstall, onCommentCreate, onPostCreate
└── client/
    └── App.jsx          # React queue viewer with filter tabs
```

## Triggers

| Trigger | Description |
|---------|-------------|
| `onAppInstall` | Fires when app is installed |
| `onCommentCreate` | Fires when a new comment is created |
| `onPostCreate` | Fires when a new post is created |

## Permissions

- `read` — Read subreddit content
- `submit` — Submit posts and comments
- `modposts` — Moderate posts and comments

## License

MIT
