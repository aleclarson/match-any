#!/usr/bin/env node
// @flow

const {test} = require('testpass')

const matchAny = require('.')

test('regex.global must be true', (t) => {
  matchAny('', /.+/)
}).catch(/marked as global/)

test('alternating matches', (t) => {
  const input = 'a1 b2'
  const digitRE = /\d/g
  const letterRE = /[a-z]/gi
  const matches = matchAny(input, digitRE, letterRE)
  matches.forEach((match, i) => {
    t.eq(input[i], match[0])
    if (letterRE.test(match[0])) {
      t.eq(match.regex, letterRE)
    } else {
      t.eq(match.regex, digitRE)
    }
  })
})

test('shared matches', (t) => {
  const input = 'B'
  const digitRE = /\d/g
  const letterRE = /[a-z]/gi
  const capitalRE = /[A-Z]/g

  // The last matching regex wins.
  t.eq(matchAny(input, letterRE, capitalRE)[0].regex, capitalRE)
  t.eq(matchAny(input, capitalRE, letterRE)[0].regex, letterRE)
})

test('no matches', (t) => {
  t.eq(matchAny('', /o/g), [])
})
