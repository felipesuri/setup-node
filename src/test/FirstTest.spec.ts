import { User } from '@models/User'

test('it shopuld ne ok', () => {
  const user = new User()

  user.name = 'Felipe'

  expect(user.name).toEqual('Felipe')
})
