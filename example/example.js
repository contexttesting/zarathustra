/* yarn example/ */
import zarathustra from '../src'

(async () => {
  const res = await zarathustra({
    text: 'example',
  })
  console.log(res)
})()