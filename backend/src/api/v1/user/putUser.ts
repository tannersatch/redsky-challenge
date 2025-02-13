import { Request, Response } from 'express'
import memCache from '../../utils/memCache'
import { userSchema } from './userConstants'
import { send } from '../../utils/apiResponse'
import { User } from './user.types'

const putUser = (req: Request, res: Response) => {
  const id = req.params.id
  // check if the request body is valid
  const parsed = userSchema.safeParse(req.body)
  if (!parsed.success) {
    return send.error(res, parsed.error.message, 400)
  }

  // update the user in the cache
  const users: User[] | undefined = memCache.get('users')
  if (users) {
    const user = users.find((user: any) => user.id === id)
    if (user) {
      const updatedUsers = users.map((user: any) => {
        if (user.id === id) {
          return parsed.data
        }
        return user
      })
      memCache.set('users', updatedUsers, 3600)
      return send.success(res, parsed.data, 200)
    }
  }

  // user not found
  return send.error(res, 'User not found', 404)
}

export default putUser
