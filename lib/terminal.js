const readline = require('readline')

class Terminal {
  constructor (opts = { stdin: null, stdout: null }) {
    this.stdin = opts.stdin
    this.stdout = opts.stdout
    this.rl = readline.createInterface(opts.stdin, opts.stdout)
    this.rl.once('SIGINT', () => {
      this.rl.close()
      process.exit(0)
    })
  }

  start (prompt, onUserInput) {
    this.rl.question(prompt, msg => this.rl.question(prompt, onUserInput))
  }

  log (msg) {
    readline.cursorTo(this.stdout, 0)
    readline.clearLine(this.stdout, 0)
    console.log(msg)
    this.rl.prompt(true)
  }

  question (prompt, cb) {
    this.rl.question(prompt, cb)
  }
}

module.exports = Terminal
