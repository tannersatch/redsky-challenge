import { Request, Response } from 'express'
import { User } from './user.types'
import memCache from '../../utils/memCache'
import { send } from '../../utils/apiResponse'

const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id)

  // delete the user from the cache
  const users: User[] | undefined = memCache.get('users')
  if (users) {
    const updatedUsers = users.filter((user: User) => user.id !== id)
    const reindexedUsers = updatedUsers.map((user: User, index: number) => ({ ...user, id: index + 1 }))
    memCache.set('users', reindexedUsers, 3600)
    return send.success(res, 'User deleted', 200)
  }

  // user not found
  return send.error(res, 'User not found', 404)
}

export default deleteUser
