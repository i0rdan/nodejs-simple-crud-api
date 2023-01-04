import { User } from "../interfaces/User";
import { v1 } from "uuid";

class Store {
  private users: User[] = [
    { id: v1(), username: 'user 1', age: 66, hobbies: ['reading'] },
    { id: v1(), username: 'user 2', age: 12, hobbies: ['golf', 'jokes'] },
    { id: v1(), username: 'user 3', age: 22, hobbies: ['gaming'] },
    { id: v1(), username: 'user 4', age: 31, hobbies: ['programming'] },
    { id: v1(), username: 'user 5', age: 41, hobbies: [] },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      return user;
    }
    throw new Error('No such user, please check id!');
  }

  addUser(user: User): User {
    const userExists = Boolean(this.users.find((u) => 
      u.id === user.id
    ));
    if (!userExists) {
      this.users.push(user);
      return user;
    }
    throw new Error('User with such id already exists!');
  }

  deleteUser(id: string): boolean {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    throw new Error('No such user, please check id!');
  }

  updateUser(user: User): User {
    if (this.deleteUser(user.id)) {
      return this.addUser(user);
    }
    throw new Error('No such user, please check id!');
  }
}

export const store = new Store();
