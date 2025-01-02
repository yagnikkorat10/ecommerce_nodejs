import express, { Express } from 'express'
import { PORT } from './secrets'
import rootRouter from './routes'
import { PrismaClient } from '@prisma/client'

const app: Express = express()

app.use(express.json());

app.use('/api', rootRouter);

app.listen(PORT, () => {
    console.log(`App is working on http://localhost:${PORT}`)
})