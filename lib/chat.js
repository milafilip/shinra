const moment = require('moment')
const tmi = require('tmi.js')
const safeColors = require('colors/safe')
const color = require('./color')

const timeFormat = "HH:MM:SS"

function getTimeString() {
  return moment().format(timeFormat)
}

class Chat {
  constructor (opts = { channelname: null, username: null, password: null, terminal: null }) {
    this.channelname = opts.channelname
    this.username = opts.username
    this.password = opts.password
    this.terminal = opts.terminal
  }

  start () {
    const { channelname, username, password, terminal } = this
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
      terminal.start(`${this.client.getUsername()}: `, (msg) => this.client.say(channelname, msg))
    })
    this.client.on('disconnected', (reason) => {
      console.log(`Disconnected: ${reason}`)
      process.exit(1)
    })
    this.client.on('message', (target, context, msg, self) => {
      if (self) { return }
      const name = context['display-name']
      const terminalColor = color.getTerminalColor(context['color'])
      const nameWithColor = safeColors[terminalColor](name)
      terminal.log(`${getTimeString()} ${nameWithColor}: ${msg}`)
    })
    this.client.connect()
    return this
  }
}

module.exports = Chat
