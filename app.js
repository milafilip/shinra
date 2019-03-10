require('dotenv').config()
const Chat = require('./lib/chat')
const Terminal = require('./lib/terminal')

const { stdin, stdout } = process
const terminal = new Terminal({ stdin, stdout })

async function getChannelname () {
  let channelname = process.env.CHANNEL
  if (!channelname || channelname.trim() === '') {
    channelname = await terminal.question('What channel do you want to join? ')
  }
  return channelname
}

(async () => {
  const channelname = await getChannelname()
  const username = process.env.USERNAME
  const password = process.env.TOKEN
  const chat = new Chat({ channelname, username, password, terminal })
  chat.start()
})().catch(e => {
  console.error(e)
  process.exit(1)
})
