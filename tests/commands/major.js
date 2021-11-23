const test = require('ava')
const { $spawn } = require('../utils/_child')

test('major should print text', async t => {
  try {
    const data = await $spawn()
    t.regex(data, /ok/)
  } catch (e) {
    t.fail()
  }
})
