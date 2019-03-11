const mockOn = jest.fn()
const mockConnect = jest.fn()
jest.mock('tmi.js', () => {
  return {
    client: jest.fn(() => {
      return {
        on: mockOn,
        connect: mockConnect
      }
    }),
    __mockOn: mockOn,
    __mockConnect: mockConnect
  }
})

const mockOnce = jest.fn()
const mockQuestion = jest.fn()
const mockPrompt = jest.fn()
const mockCursorTo = jest.fn()
const mockClearLine = jest.fn()
jest.mock('readline', () => {
  return {
    createInterface: jest.fn(() => {
      return {
        once: mockOnce,
        question: mockQuestion,
        prompt: mockPrompt
      }
    }),
    cursorTo: mockCursorTo,
    clearLine: mockClearLine,
    __mockOnce: mockOnce,
    __mockQuestion: mockQuestion,
    __mockPrompt: mockPrompt
  }
})
