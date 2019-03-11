const Color = require('../color.js')

describe('color', () => {
  test('can find black', () => {
    expect(Color.getTerminalColor('#000')).toEqual('black')
  })

  test('can find white', () => {
    expect(Color.getTerminalColor('#FFFFFF')).toEqual('white')
  })

  test('can find blue', () => {
    expect(Color.getTerminalColor('#0000FF')).toEqual('blue')
  })

  test('can find grey', () => {
    expect(Color.getTerminalColor('#808080')).toEqual('grey')
  })

  test('can find yellow', () => {
    expect(Color.getTerminalColor('#ffff00')).toEqual('yellow')
  })

  test('can find red', () => {
    expect(Color.getTerminalColor('#ff0000')).toEqual('red')
  })

  test('can find magenta', () => {
    expect(Color.getTerminalColor('#800080')).toEqual('magenta')
  })

  test('can find green', () => {
    expect(Color.getTerminalColor('#00ff00')).toEqual('green')
  })

  test('can find cyan', () => {
    expect(Color.getTerminalColor('#00ffff')).toEqual('cyan')
  })
})
