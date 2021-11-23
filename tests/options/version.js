const test = require('ava')
const { $spawn } = require('../utils/_child')
const { version } = require('../../package')

test('option version should print version', async t => {
  try {
    const data = await $spawn(['--version'])
    t.regex(data, new RegExp(version))
  } catch (e) {
    t.fail()
  }
})
