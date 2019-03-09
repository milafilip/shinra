require('dotenv').config()
const chat = require('./lib/chat')
const terminal = require('./lib/terminal')
// const color = require('colors/safe')

const start = (channelname) => {
  chat.start(channelname, process.env.USERNAME, process.env.TOKEN)
}

chat.onMessage((channelname, context, msg, self) => {
  if (self) { return }
  terminal.log(`${context.username}: ${msg}`)
})

chat.onConnect(() => {
  terminal.onUserInput(msg => chat.say(msg))
  terminal.start(`${chat.getUsername()}: `)
})

terminal.setup(process.stdin, process.stdout)
if (process.env.CHANNEL) {
  start(process.env.CHANNEL)
} else {
  terminal.question('What channel do you want to join? ', start)
}
