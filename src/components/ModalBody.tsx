import {Box, Button, Center, Text, VStack, View} from '@gluestack-ui/themed';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Modal} from 'react-native';

const ModalBody = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <Center h="100%" w="100%" backgroundColor="rgba(237, 242, 247, 0.7)">
        <VStack
          alignItems="center"
          w="80%"
          p="$3"
          pb="$8"
          bg="white"
          borderRadius="$lg">
          <Button onPress={onClose} variant="link" alignSelf="flex-end">
            <Entypo name="cross" size={30} color="#d42e12" />
          </Button>
          <Box>{children}</Box>
        </VStack>
      </Center>
    </Modal>
  );
};

export default ModalBody;
