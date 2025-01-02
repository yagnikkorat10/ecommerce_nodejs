import express, { Express, Request, Response } from 'express'
import { PORT } from './secrets'
import rootRouter from './routes'
import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt'

const app: Express = express()

app.use(express.json())

app.get('/api', (req, res, next) => {
    console.log(`/api [${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass to rootRouter
}, rootRouter)

/* app.post('/api/auth/signup', async (req, res) => {
   const { email, password, name } = req.body;
   
       let user = await prismaClient.user.findFirst({ where: { email } })
   
       if (user) {
           throw Error('user alredy exists!')
       }
       user = await prismaClient.user.create({
           data: {
               name,
               email,
               password: hashSync(password, 10)
           }
       })
       res.json(user)
}); */

export const prismaClient = new PrismaClient({
    log: ['query']
})

app.listen(PORT, () => {
    console.log(`App is working on http://localhost:${PORT}`)
})