const tmi = require('tmi.js')
let onMessageHandler, onConnectHandler, client, channelname

module.exports = {
  start: (channel, username, password) => {
    channelname = channel
    const opts = {
      identity: {
        username,
        password
      },
      channels: [
        channelname
      ]
    }
    client = new tmi.client(opts)  // eslint-disable-line
    client.on('connected', (addr, port) => {
      if (onConnectHandler) {
        onConnectHandler(addr, port)
      }
    })
    client.on('disconnected', (reason) => {
      console.log(`Disconnected: ${reason}`)
      process.exit(1)
    })
    client.on('message', (target, context, msg, self) => {
      onMessageHandler(target, context, msg, self)
    })
    client.connect()
  },
  onMessage: (handler) => {
    onMessageHandler = handler
  },
  onConnect: (handler) => {
    onConnectHandler = handler
  },
  say: (message) => client.say(channelname, message),
  whisper: (message) => client.whisper(channelname, message),
  getUsername: () => client.getUsername()
}
