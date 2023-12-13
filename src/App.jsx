import UserList from './components/UserList/UserList.jsx';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import AddUserModal from './components/Modals/AddUserModal.jsx';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as='main' padding={'20px 10px'}>
      <Flex justifyContent={'flex-end'} marginBottom={'50px'}>
        <Button size={'lg'} colorScheme='blue' variant='solid' onClick={onOpen}>
          Add
        </Button>
      </Flex>
      <UserList />
      <AddUserModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default App;
