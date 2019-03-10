require('dotenv').config()
const Chat = require('./lib/chat')
const Terminal = require('./lib/terminal')

const { stdin, stdout } = process
const terminal = new Terminal({ stdin, stdout })

new Promise((resolve, reject) => {
  if (process.env.CHANNEL) {
    resolve(process.env.CHANNEL)
  } else {
    terminal.question('What channel do you want to join? ', (channelname) => {
      resolve(channelname)
    })
  }
}).then(channelname => {
  const username = process.env.USERNAME
  const password = process.env.TOKEN
  new Chat({ channelname, username, password, terminal }).start()
}).catch(e => {
  console.error(e)
  process.exit(1)
})
