describe('app', () => {
  test('can run', async () => {
    process.env.USERNAME = 'username'
    process.env.TOKEN = 'api-token'
    process.env.CHANNEL = 'channel'

    const mockStart = jest.fn()
    jest.mock('../lib/chat.js', () => {
      return jest.fn().mockImplementation(() => {
        return {
          start: mockStart
        }
      })
    })

    await require('../app.js')
  })
})

