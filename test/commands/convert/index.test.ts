import {expect, test} from '@oclif/test'

// TODO:

describe('hello', () => {
  test
  .stdout()
  .command(['hello', 'friend', '--from=oclif'])
  .it('runs hello cmd', ctx => {
    expect(ctx.stdout).to.contain('hello friend from oclif!')
  })
})
