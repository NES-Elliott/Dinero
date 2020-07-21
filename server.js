const express = require('express')
const dontenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dontenv.config({ path: './config/config.env' })

connectDB()

const transactions = require('./routes/transactionsRoute')

const app = express()

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
