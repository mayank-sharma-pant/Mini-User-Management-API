const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes.js')
const loger = require('./middleware/logger')   
const errorHandler  = require('./middleware/errorHandler')

app.use(express.json())
app.use(loger)
app.use('/api/users', userRoutes)
app.use(errorHandler)

const PORT = 3000;

app.listen(PORT, () => 
    console.log(`🚀 Server running at http://localhost:${PORT}`)
);

