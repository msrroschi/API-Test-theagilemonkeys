import { config } from 'dotenv'
config()

export default {
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET || 'mySecretIsSafeWithYourCode',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    MONGO_DB: process.env.MONGO_DB || 'the-agile-monkeys-api-test',
}