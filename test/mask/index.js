import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import zarathustra from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await zarathustra({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts