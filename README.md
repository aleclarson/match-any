
# match-any v0.0.1 

Search a string for substrings matching any number of provided `RegExp` objects.

```js
const matchAny = require('match-any')

// Returns a sparse array
const matches = matchAny('a1 b2', /[a-z]/g, /[0-9]/g)

matches.forEach((match, index) => {
  console.log(`
    index = ${index}
    string = '${match[0]}'
    regex = /${match.regex.source}/g
  `)
})

/* Console output:
 *
 *   index = 0
 *   string = 'a'
 *   regex = /[a-z]/g
 *
 *   index = 1
 *   string = '1'
 *   regex = /[0-9]/g
 *
 *   index = 3
 *   string = 'b'
 *   regex = /[a-z]/g
 *
 *   index = 4
 *   string = '2'
 *   regex = /[0-9]/g
 */
```

