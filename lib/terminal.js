const readline = require('readline')

class Terminal {
  constructor (opts = { stdin: null, stdout: null }) {
    this.stdin = opts.stdin
    this.stdout = opts.stdout
    this.rl = readline.createInterface(this.stdin, this.stdout)
    this.rl.once('SIGINT', () => {
      this.rl.close()
      process.exit(0)
    })
  }

  start (prompt, onUserInput) {
    this.rl.question(prompt, msg => this.rl.question(prompt, onUserInput))
    return this
  }

  log (msg) {
    readline.cursorTo(this.stdout, 0)
    readline.clearLine(this.stdout, 0)
    console.log(msg)
    this.rl.prompt(true)
    return this
  }

  question (prompt) {
    return new Promise((resolve, reject) => {
      try {
        this.rl.question(prompt, (input) => resolve(input))
      } catch (e) {
        reject(e)
      }
    })
  }
}

module.exports = Terminal
