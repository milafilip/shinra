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
  terminal.start(`${chat.getUsername()}: `)
})

terminal.setup(process.stdin, process.stdout)
terminal.question('What channel do you want to join? ', (channelname) => {
  chat.start(channelname, process.env.USERNAME, process.env.TOKEN)
})
