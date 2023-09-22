import {Box, Button, Center, Text, VStack, View} from '@gluestack-ui/themed';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Modal, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet} from 'react-native';

const ModalBody = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <BlurView
        style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        blurType="light"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <Center h="100%" w="100%">
        <VStack
          borderWidth={1}
          borderColor="$borderDark400"
          alignItems="center"
          w="80%"
          p="$3"
          pb="$8"
          bg="white"
          borderRadius="$lg">
          <Button onPress={onClose} variant="link" alignSelf="flex-end">
            <Entypo name="cross" size={30} color="#d42e12" />
          </Button>
          <Box w="$full">{children}</Box>
        </VStack>
      </Center>
    </Modal>
  );
};

export default ModalBody;
