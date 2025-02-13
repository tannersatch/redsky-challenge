import express, { Router } from 'express'
import postUser from './postUser'
import putUser from './putUser'
import patchUser from './patchUser'
import getUser from './getUser'
import deleteUser from './deleteUser'

const userRouter: Router = express.Router()

userRouter.post('/', postUser)
userRouter.put('/:id', putUser)
userRouter.patch('/:id', patchUser)
userRouter.get('/:id', getUser)
userRouter.delete('/:id', deleteUser)

export default userRouter
