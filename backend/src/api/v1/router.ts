import express, { Router } from 'express'
// import v0UserRoutes from './v0/user';
import userRouter from './user/router'
import usersRouter from './users/router'

const v1ApiRouter: Router = express.Router()

v1ApiRouter.use('/user', userRouter)
v1ApiRouter.use('/users', usersRouter)

export default v1ApiRouter
