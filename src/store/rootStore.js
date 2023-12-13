import { types } from 'mobx-state-tree';
import UsersStore from './users.js';

const RootStore = types.model('RootStore', {
  users: types.optional(UsersStore, {
    users: [
      { id: 1, name: 'Vlad' },
      { id: 2, name: 'Igor' },
      { id: 3, name: 'Elena' },
      { id: 4, name: 'Inna' },
      { id: 5, name: 'Mariia' },
      { id: 6, name: 'Anna' },
    ],
  }),
});

export default RootStore;
