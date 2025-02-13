import { Request, Response } from 'express'
import memCache from '../../utils/memCache'
import { send } from '../../utils/apiResponse'
import { User } from './user.types'

const getUser = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  console.log('cached users: ', memCache.get('users'));

  // get the user from the cache
  const users: User[] | undefined = memCache.get('users')
  if (users) {
    const user = users.find((user: User) => user.id === id)
    if (user) {
      return send.success(res, user, 200)
    }
  }

  // user not found
  return send.error(res, 'User not found', 404)
}

export default getUser
