
const hexColorToNumeric = (hex) => {
  if (!hex) {
    return NaN
  }
  const strippedHashStr = hex[0] === "#" ? hex.substring(1) : hex
  return parseInt(strippedHashStr, 16)
}

const validColors = [
  'blue',
  'cyan',
  'green',
  'grey',
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
  getTerminalColor: (input) => terminalColorSimple(hexColorToNumeric(input))
}
