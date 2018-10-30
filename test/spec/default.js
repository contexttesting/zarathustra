import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import zarathustra from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof zarathustra, 'function')
  },
  async 'calls package without error'() {
    await zarathustra()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await zarathustra({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T