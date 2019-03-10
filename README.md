# Shinra
Command line client for twitch.

## Prerequisites
1.  Node v11.4.0 or greater
2.  Yarn v1.12.3 or greater (you can use npm, but instructions below use yarn)

## Installation
1.  `yarn install`
2.  Get a secret login token.  [Just follow the instructions here.](https://twitchapps.com/tmi/)
3.  Create `.env` file
```
USERNAME=my_username
TOKEN=super_secret_token_obtained_from_step_2
# Optional default channel to connect to:
# CHANNEL=some_streamer_channel_name
```

## Usage
Just run
```
yarn start
```
and start chatting!

Or if you prefer no colors:
```
yarn start --no-color
```
