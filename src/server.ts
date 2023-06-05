import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
async function dbConnection() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database is connected')

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Fail to connect database', error)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled error is detected, we r closing our server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
dbConnection()
