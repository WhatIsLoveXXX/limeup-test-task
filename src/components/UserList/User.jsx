import { Button, Card, CardBody, Flex, Input, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

const User = ({
  name,
  onChangeName,
  id,
  onEdit,
  isEdit,
  handleUpdatedDone,
  onDelete,
  isDisabled,
  handleDisable,
}) => {
  return (
    <Card>
      <CardBody display={'flex'} justifyContent={'space-between'}>
        {isEdit ? (
          <Flex direction={'column'} width={'100%'} alignItems={'center'}>
            <Input
              autoFocus
              name={id}
              variant='outline'
              value={name}
              onChange={(e) => onChangeName(e, id)}
              onKeyDown={handleUpdatedDone}
            />
            <Text>Press enter to close the edit mode</Text>
          </Flex>
        ) : (
          <>
            <Text>{name}</Text>
            <Flex>
              <Button isDisabled={isDisabled} marginRight={'10px'} onClick={() => onEdit(id)}>
                Edit name
              </Button>
              <Button isDisabled={isDisabled} marginRight={'10px'} onClick={() => onDelete(id)}>
                Delete
              </Button>
              <Button onClick={() => handleDisable(id)}>{isDisabled ? 'Unlock' : 'Lock'}</Button>
            </Flex>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default observer(User);
