import { Request, Response } from 'express'
import memCache from '../../utils/memCache'
import { userSchema } from './userConstants'
import { send } from '../../utils/apiResponse'
import { User } from './user.types'

const patchUser = (req: Request, res: Response) => {
  console.log('raw req: ', req.body);
  const id = Number(req.params.id)
  // check if the request body is valid
  const parsed = userSchema.safeParse(req.body)
  if (!parsed.success) {
    return send.error(res, parsed.error.message, 400)
  }
  console.log('parsed data: ', parsed.data);

  // update the user in the cache
  const users: User[] | undefined = memCache.get('users')
  console.log('users: ', users);
  if (users) {
    const user = users.find((user: User) => user.id === id)
    if (user) {
      const updatedUsers = users.map((user: User) => {
        if (user.id === id) {
          return { ...user, ...parsed.data }
        }
        return user
      })
      console.log('updated users: ', updatedUsers);
      memCache.set('users', updatedUsers, 3600)
      return send.success(res, parsed.data, 200)
    }
  }

  // user not found
  return send.error(res, 'User not found', 404)
}

export default patchUser
