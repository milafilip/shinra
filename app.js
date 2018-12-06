require('dotenv').config()
const chat = require('./lib/chat')
const terminal = require('./lib/terminal')
// const color = require('colors/safe')

chat.onMessage((channelname, context, msg, self) => {
  if (self) { return }
  terminal.log(`${context.username}: ${msg}`)
})

chat.onConnect(() => {
  terminal.onUserInput(msg => chat.say(msg))
  terminal.start(process.stdin, process.stdout, `${chat.getUsername()}: `)
})
chat.start('jonnyman9', process.env.USERNAME, process.env.TOKEN)
