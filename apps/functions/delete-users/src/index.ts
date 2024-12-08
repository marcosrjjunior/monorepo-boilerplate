import { Hono } from 'hono'
import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

import Database from '@repo/core/src/db/schema/Database'

type Bindings = {
  DATABASE_HOST: string
  DATABASE_PASSWORD: string
  DATABASE_USER: string
  DATABASE_NAME: string
  DATABASE_PORT: string
}

// Workers reference: https://hono.dev/docs/getting-started/cloudflare-workers#load-env-when-local-development

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async c => {
  const db = new Kysely<Database>({
    dialect: new PostgresDialect({
      pool: new Pool({
        // max: 10,
        host: c.env.DATABASE_HOST,
        password: c.env.DATABASE_PASSWORD,
        user: c.env.DATABASE_USER,
        database: c.env.DATABASE_NAME,
        port: +(c.env.DATABASE_PORT as string),
      }),
    }),
  })

  await db.deleteFrom('users').where('created_at', '<=', new Date()).execute()

  return c.text('Hello Hono!')
})

app.onError((error, c) => {
  // Log error (Sentry, ....)
  // captureException({
  //   error: error,
  //   extra: {
  //     function: '[FILENAME:FUNCTIONAME]',
  //   },
  // })

  console.error(`${error}`)
  return c.json(
    { error, message: error.message || 'Custom Error Message' },
    500,
  )
})

export default {
  ...app,
  port: 3333,
}
