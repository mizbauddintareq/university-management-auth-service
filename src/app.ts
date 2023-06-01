import cors from 'cors'
import express, { Application, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()
// using cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', usersRouter)

// Testing
app.get('/', async (req: any, res: Response) => {
  res.send('working successfully')
})

export default app
