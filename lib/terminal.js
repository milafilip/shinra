const readline = require('readline')
let onUserInputHandler, standardout, rl

module.exports = {
  setup: (stdin, stdout, prompt) => {
    standardout = stdout
    rl = readline.createInterface(stdin, stdout)
    rl.once('SIGINT', () => {
      rl.close()
      process.exit(0)
    })
  },
  start: (prompt) => {
    const msgCallback = (msg) => {
      onUserInputHandler(msg)
      rl.question(prompt, msgCallback)
    }
    rl.question(prompt, msgCallback)
  },
  onUserInput: (handler) => {
    onUserInputHandler = handler
  },
  log: (msg) => {
    readline.cursorTo(standardout, 0)
    readline.clearLine(standardout, 0)
    console.log(msg)
    rl.prompt(true)
  },
  question: (prompt, cb) => {
    rl.question(prompt, cb)
  }
}
