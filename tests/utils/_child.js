const { spawn } = require('child_process')
const { bin } = require('./_metadata')

const $spawn = async (args = [], opts = {}) =>
  new Promise((resolve, reject) => {
    opts = { stdio: 'pipe', ...opts }
    const stderr = []
    const stdout = []
    const child = spawn(bin, args, opts)

    if (opts.stdio === 'pipe') {
      child.stderr.on('data', err => stderr.push(err))
      child.stdout.on('data', data => stdout.push(data))
    }

    child.on('error', reject)
    child.on('close', (code, signal) => {
      if (code === 0) return resolve(stdout.map(line => line.toString()).join(''))

      const errorLogs = stderr.map(line => line.toString()).join('')
      if (opts.stdio !== 'inherit') {
        reject(new Error(`Exited with ${code || signal}\n${errorLogs}`))
      } else {
        reject(new Error(`Exited with ${code || signal}`))
      }
    })
  })

module.exports = {
  $spawn,
}
