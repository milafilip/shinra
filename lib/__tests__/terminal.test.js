const Terminal = require('../terminal.js')

describe('terminal', () => {
  let stdin, stdout, readline, terminal
  beforeEach(() => {
    stdin = {}
    stdout = {}
    readline = require('readline')
    terminal = new Terminal({ stdin, stdout })
  })

  test('can create', () => {
    expect(readline.__mockOnce).toHaveBeenCalledWith('SIGINT', expect.any(Function))
  })

  test('can start', () => {
    terminal.start('prompt: ', jest.fn())
    expect(readline.__mockQuestion).toHaveBeenCalledWith('prompt: ', expect.any(Function))
  })

  test('can log', () => {
    terminal.log('hi there')
    expect(readline.cursorTo).toHaveBeenCalledWith(stdin, 0)
    expect(readline.clearLine).toHaveBeenCalledWith(stdout, 0)
    expect(readline.__mockPrompt).toHaveBeenCalledWith(true)
  })

  test('can ask question', () => {
    terminal.question('prompt: ').then(data => {
      expect(readline.__mockQuestion).toHaveBeenCalledWith('prompt: ', expect.any(Function))
    })
  })
})
