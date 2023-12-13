import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import useStore from '../../hooks/useStore.js';

const AddUserModal = ({ isOpen, onClose }) => {
  const { users } = useStore();
  const [userName, setUserName] = useState('');

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };

  const onAdd = () => {
    users.addUser(userName);
    onClose();
    setUserName('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input autoFocus variant='outline' value={userName} onChange={onChangeName} />
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme='blue' onClick={onAdd}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
