import { User } from "../interfaces/User";

export function createUserFromBody(body: any): User {
  const requiredKeys = ['username', 'hobbies', 'age'];
  const newUser = {} as User;
  if (!requiredKeys.length) {
    throw new Error('Body required');
  }
  for (const key of requiredKeys) {
    if (!body[key]) {
      throw new Error('Wrong key');
    }
    (newUser as any)[key] = body[key];
  }
  return newUser;
}
