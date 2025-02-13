import { Request, Response } from 'express'
import { send } from '../../utils/apiResponse'
import memCache from '../../utils/memCache'
import { User } from './user.types'
import { userSchema } from './userConstants'

const postUser = (req: Request, res: Response) => {
  // check if the request body is valid
  const parsed = userSchema.safeParse(req.body)
  if (!parsed.success) {
    return send.error(res, parsed.error.message, 400)
  }

  // check if the user already exists
  const users: User[] | undefined = memCache.get('users')
  if (users) {
    const user = users.find((user: User) => user.email === parsed.data.email)
    if (user) {
      return send.error(res, 'User already exists', 400)
    }
  }

  // add the user to the cache
  const updatedUsers = users ?? []
  const newUser: User = {
    id: updatedUsers.length + 1,
    ...parsed.data,
  }
  updatedUsers.push(newUser)
  memCache.set('users', updatedUsers, 3600)

  return send.success(res, parsed.data, 200)
}

export default postUser
