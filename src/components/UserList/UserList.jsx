import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore.js';
import User from './User.jsx';
import { useCallback, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

const UserList = () => {
  const { users } = useStore();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [disabledUsersActions, setDisabledUsersActions] = useState([]);

  const onChangeName = useCallback((event, id) => {
    const { value } = event.target;

    users.setName(id, value);
  }, []);

  const onEdit = useCallback((id) => {
    setSelectedUserId(id);
  }, []);

  const onDelete = useCallback((id) => {
    users.deleteUser(id);
  }, []);

  const handleDisable = useCallback(
    (id) => {
      if (disabledUsersActions.includes(id)) {
        const filteredUsersActions = disabledUsersActions.filter((userId) => userId !== id);

        setDisabledUsersActions(filteredUsersActions);
        return;
      }

      setDisabledUsersActions([...disabledUsersActions, id]);
    },
    [disabledUsersActions],
  );

  const handleUpdatedDone = useCallback((event) => {
    if (event.key === 'Enter') {
      setSelectedUserId(null);
    }
  }, []);

  return (
    <SimpleGrid spacing={10} templateColumns='repeat(2, minmax(200px, 1fr))'>
      {users.list.map((user) => {
        const isEdit = user.id === selectedUserId;
        const isDisabled = disabledUsersActions.includes(user.id);

        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            onChangeName={onChangeName}
            onEdit={onEdit}
            isEdit={isEdit}
            handleUpdatedDone={handleUpdatedDone}
            onDelete={onDelete}
            handleDisable={handleDisable}
            isDisabled={isDisabled}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default observer(UserList);
