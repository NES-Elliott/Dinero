const express = require('express')
const dontenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
// Dot Env Config
dontenv.config({ path: './config/config.env' })
// Connection to MongoDB
connectDB()
// Routes
const transactions = require('./routes/transactionsRoute')
// Initializing Express
const app = express()
// Body Parse Middleware
app.use(express.json())
// Use Routes
app.use('/api/v1/transactions', transactions)
// Port and Server Listening
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
