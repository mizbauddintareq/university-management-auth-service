import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function dbConnection() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database is connected')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Fail to connect database', error)
  }
}
dbConnection()
