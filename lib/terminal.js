const readline = require('readline')
let onUserInputHandler, standardout, rl

module.exports = {
  start: (stdin, stdout, prompt) => {
    standardout = stdout
    rl = readline.createInterface(stdin, stdout)
    // rl.setPrompt(prompt)
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
    console.log(msg)
    rl.prompt(true)
  }
}
