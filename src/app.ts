import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()
// using cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users', usersRouter)

// // Testing
// app.get('/', async (req: Request, res: Response) => {
//   res.send('working successfully')
// })

// Global error handler
app.use(globalErrorHandler)

export default app
