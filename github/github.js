import { inspect } from 'util'
import core from '@idio/core'

(async () => {
  const { url } = await core({
    bodyparser: {
      use: true,
    },
    /** @param {import('koa').Context} ctx */
    async fn(ctx, next) {
      console.log(inspect(ctx.request.body, { colors: true }))
      ctx.body = 'ok'
      await next()
    },
  }, {
    port: 4567,
  })
  console.log(url)
})()