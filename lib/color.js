
const hexColorToNumeric = (hex) => {
  if (!hex) {
    return NaN
  }
  const strippedHashStr = hex[0] === "#" ? hex.substring(1) : hex
  return parseInt(strippedHashStr, 16)
}

const charsInAlphabet = 30
const colorSpaceForChar = Math.floor(0xffffff / charsInAlphabet)
const textToNumericColor = (text) => {
  if (!text) {
    return NaN
  }
  const charXor = Array.from(text).reduce((out, n) => out ^ n.charCodeAt(0), 0)
  return charXor % charsInAlphabet * colorSpaceForChar
}

const validColors = [
  'blue',
  'cyan',
  'green',
  'gray',
  'magenta',
  'red',
  'white',
  'yellow',
]
const allColorPartsSize = Math.floor(0xffffff / (validColors.length - 1))

const terminalColorSimple = (numericColor) => {
  if (isNaN(numericColor)) {
    return "white"
  }
  const maybeColorId = Math.floor(numericColor / allColorPartsSize)
  return validColors[maybeColorId]
}

module.exports = {
  getTerminalColor: (input) => {
    const parsedHex = hexColorToNumeric(input)
    return terminalColorSimple(isNaN(parsedHex)
      ? textToNumericColor(input)
      : parsedHex)
  }
}
