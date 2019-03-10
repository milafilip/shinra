const tmi = require('tmi.js')
const safeColors = require('colors/safe')
const color = require('./color')

class Chat {
  constructor (opts = { client: null, channelname: null, username: null, password: null, terminal: null }) {
    this.client = opts.client
    this.channelname = opts.channelname
    this.username = opts.username
    this.password = opts.password
    this.terminal = opts.terminal
  }

  start () {
    const { channelname, username, password } = this
    const opts = {
      identity: {
        username,
        password
      },
      channels: [
        channelname
      ]
    }
    this.client = new tmi.client(opts)  // eslint-disable-line
    this.client.on('connected', (addr, port) => {
      this.terminal.start(`${this.client.getUsername()}: `, msg => this.client.say(channelname, msg))
    })
    this.client.on('disconnected', (reason) => {
      console.log(`Disconnected: ${reason}`)
      process.exit(1)
    })
    this.client.on('message', (target, context, msg, self) => {
      if (self) { return }
      const name = context['display-name']
      const newColor = color.getTerminalColor(context['color'])
      const colorName = safeColors[newColor](name)
      this.terminal.log(`${colorName}: ${msg}`)
    })
    this.client.connect()
  }
}

module.exports = Chat
