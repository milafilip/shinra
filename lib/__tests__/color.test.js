const Color = require('../color.js')

describe('color', () => {
  test('should produce blue from #000', () => {
    expect(Color.getTerminalColor('#000')).toEqual('blue')
  })

  test('should produce yellow from #FFFFFF', () => {
    expect(Color.getTerminalColor('#FFFFFF')).toEqual('yellow')
  })

  test('can find blue', () => {
    expect(Color.getTerminalColor('#0000FF')).toEqual('blue')
  })

  test('should produce grey from #808080', () => {
    expect(Color.getTerminalColor('#808080')).toEqual('grey')
  })

  test('should produce white from #ffff00', () => {
    expect(Color.getTerminalColor('#ffff00')).toEqual('white')
  })

  test('should produce white from #ff0000', () => {
    expect(Color.getTerminalColor('#ff0000')).toEqual('white')
  })

  test('#800080 to grey', () => {
    expect(Color.getTerminalColor('#800080')).toEqual('grey')
  })

  test('should produce blue from #00ff00', () => {
    expect(Color.getTerminalColor('#00ff00')).toEqual('blue')
  })

  test('should produce blue from #00ffff', () => {
    expect(Color.getTerminalColor('#00ffff')).toEqual('blue')
  })

  test('should be happy with NaN', () => {
    expect(Color.getTerminalColor(NaN)).toEqual('white')
  })

  test('should be happy with input which is not a hex value', () => {
    expect(Color.getTerminalColor("Not hex color")).toEqual('white')
  })
})
