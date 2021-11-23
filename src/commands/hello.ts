import { Command } from 'func'

@Command({
  name: 'hello',
})
export class Hello {
  constructor() {
    console.log('hello command trigger!')
  }
}
