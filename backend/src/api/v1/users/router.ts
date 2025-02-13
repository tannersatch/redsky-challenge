import express, { Router } from 'express'
import getUsers from './getUsers'

const usersRouter: Router = express.Router()

usersRouter.get('/', getUsers)

export default usersRouter
