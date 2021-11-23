const test = require('ava')
const { $spawn } = require('../utils/_child')

test('command hello should print hello', async t => {
  try {
    const data = await $spawn(['hello'])
    t.regex(data, /hello/)
  } catch (e) {
    t.fail()
  }
})
