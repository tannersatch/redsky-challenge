import express from 'express'
import apiRouter from './api'
import cors from 'cors'

export const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

// API routes
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
