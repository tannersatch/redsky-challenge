import { Request, Response } from 'express'
import { send } from '../../utils/apiResponse'
import memCache from '../../utils/memCache'

const getUsers = async (req: Request, res: Response) => {
  let users = memCache.get('users')
  if (users) {
    console.log('users from cache')
    send.success(res, users, 200)
  } else {
    console.log('users from reqres.in api')
    const response = await fetch('https://reqres.in/api/users')
    const userList = await response.json()
    memCache.set('users', userList.data, 3600) // 1 hour
    send.success(res, userList.data, 200)
  }
}

export default getUsers
