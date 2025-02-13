import express, { Router } from 'express'
import v1ApiRouter from './v1/router'

const apiRouter: Router = express.Router()

// Redirect default api call to current api version
apiRouter.use((req, res, next) => {
  if (!req.originalUrl.startsWith('/api/v1')) {
    return res.redirect(`/api/v1${req.originalUrl.slice(4)}`) // Preserve the rest of the path
  }
  next()
})

apiRouter.use('/v1', v1ApiRouter)

export default apiRouter
