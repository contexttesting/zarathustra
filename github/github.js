import { inspect } from 'util'
import core from '@idio/core'

(async () => {
  const { url } = await core({
    bodyparser: {
      use: true,
    },
    /** @param {import('koa').Context} ctx */
    async fn(ctx, next) {
      const { payload } = ctx.request.body
      const p = JSON.parse(payload)
      console.log(inspect(p, { colors: true }))
      ctx.body = 'ok'
      await next()
    },
  }, {
    port: 4567,
  })
  console.log(url)
})()