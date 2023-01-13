import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
// import * as passport from "passport"
import passport from "passport"
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const session = require('express-session')
import session from "express-session";
const MemoryStore = require('memorystore')(session)

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
    app.use(session({
        cookie: { maxAge: 86400000 },
        store: new MemoryStore({
            checkPeriod: 86400000 // prune expired entries every 24h
        }),
        resave: false,
        saveUninitialized: false,
        secret: 'keyboard cat'
    }))
  app.use(passport.initialize())
  app.use(passport.session())

  await app.listen(3000)
}
bootstrap()