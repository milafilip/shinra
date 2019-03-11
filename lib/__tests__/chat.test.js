const Chat = require('../chat.js')

describe('chat', () => {
  let chat

  beforeEach(() => {
    const Tmi = require('tmi.js')
    const channelname = 'channel'
    const username = 'username'
    const password = 'password'
    const terminal = {
      start: jest.fn(),
      log: jest.fn(),
      question: jest.fn()
    }
    chat = new Chat({ channelname, username, password, terminal })
  })

  test('can start', () => {
    chat.start()
    const Tmi = require('tmi.js')
    expect(Tmi.__mockOn).toHaveBeenNthCalledWith(1, 'connected', expect.any(Function))
    expect(Tmi.__mockOn).toHaveBeenNthCalledWith(2, 'disconnected', expect.any(Function))
    expect(Tmi.__mockOn).toHaveBeenNthCalledWith(3, 'message', expect.any(Function))
    expect(Tmi.__mockConnect).toHaveBeenCalled()
  })
})
