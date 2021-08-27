import app from './app.js'

import mongoose from 'mongoose'
import config from './config.js'

// Connection to the Database
mongoose.connect(config.MONGO_URL, {
    dbName: config.MONGO_DB,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if (err) throw new Error(err)

    console.info('💾 Connected to Mongo Database \n')
  })

// Init Server
app.listen(app.get('port'), (err) => {
  if (err) throw new Error(err)

  console.info('>'.repeat(40))
  console.info('💻  API Test Server live')
  console.info(`📡  Running on Port ${app.get('port')}`)
  console.info('>'.repeat(40) + '\n')
})
