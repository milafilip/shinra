require('dotenv').config()
const Chat = require('./lib/chat')
const Terminal = require('./lib/terminal')
const minimistArgParser = require('minimist')

const { stdin, stdout } = process
const terminal = new Terminal({ stdin, stdout })

function run() {
  const username = process.env.USERNAME
  const password = process.env.TOKEN
  if (!username || !password) {
    throw new Error('Missing username/password in .env file')
  }
  const parsedArgs = minimistArgParser(process.argv.slice(2));
  const channelname = parsedArgs["channel"];
  if (!channelname || channelname.trim() === '') {
    throw new Error('Missing channel name, please add "--channel <ch-name>" to CLI params')
  }

  const chat = new Chat({ channelname, username, password, terminal })
  chat.start()
}

(async () => run())()
  .catch(e => {
    console.error(e.toString())
    process.exit(1)
  })
