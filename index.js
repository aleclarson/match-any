
function matchAny(input) {
  let match = null
  const matches = []
  for (let i = 1; i < arguments.length; i++) {
    const regex = arguments[i]
    if (!regex.global) {
      throw Error('RegExp instance must be marked as global')
    }
    while (match = regex.exec(input)) {
      match.input = undefined
      match.regex = regex
      matches[match.index] = match
    }
  }
  return matches
}

module.exports = matchAny
