import { types } from 'mobx-state-tree';

const User = types.model('User', {
  id: types.identifierNumber,
  name: types.string,
});

const UsersStore = types
  .model('UsersStore', {
    users: types.array(User),
    selectedUser: types.safeReference(User),
  })
  .views((self) => ({
    get list() {
      return self?.users?.map(({ id, name }) => ({ id, name }));
    },
  }))
  .actions((self) => {
    return {
      setName(id, newName) {
        self.users.forEach((user) => {
          const isSelectedUser = user.id === id;
          if (isSelectedUser) {
            user.name = newName;
          }
        });
      },
      deleteUser(id) {
        const userIndex = self.users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          self.users.splice(userIndex, 1);
        }
      },
      addUser(name) {
        const newUser = {
          id: Math.random(),
          name,
        };
        self.users.push(newUser);
      },
    };
  });

export default UsersStore;
