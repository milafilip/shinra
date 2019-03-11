require('dotenv').config()
const Chat = require('./lib/chat')
const Terminal = require('./lib/terminal')

const { stdin, stdout } = process
const terminal = new Terminal({ stdin, stdout })

async function getChannelname () {
  let channelname = process.env.CHANNEL
  if (!channelname) {
    channelname = await terminal.question('What channel do you want to join? ')
  }
  return channelname
}

(async () => {
  const username = process.env.USERNAME
  const password = process.env.TOKEN
  if (!username || !password) {
    console.log('Missing username/password in .env file')
    return process.exit()
  }
  const channelname = await getChannelname()
  if (!channelname || channelname.trim() === '') {
    console.log('Missing channelname')
    return process.exit()
  }

  const chat = new Chat({ channelname, username, password, terminal })
  chat.start()
})().catch(e => {
  console.error(e)
  process.exit(1)
})
