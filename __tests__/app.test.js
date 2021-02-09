describe('app', () => {
  test('can run', async () => {
    process.env.USERNAME = 'username'
    process.env.TOKEN = 'api-token'

    const mockStart = jest.fn()
    jest.mock('../lib/chat.js', () => {
      return jest.fn().mockImplementation(() => {
        return {
          start: mockStart
        }
      })
    })
    jest.mock('minimist', () => {
      return jest.fn().mockImplementation(() => {
        return {
          channel: "mock-channel"
        }
      })
    })

    await require('../app.js')
  })
})

