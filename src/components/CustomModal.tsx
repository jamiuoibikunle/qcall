import {Box, Button, Center, Text, VStack, View} from '@gluestack-ui/themed';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {AnimatePresence, Motion} from '@legendapp/motion';

const CustomModal = ({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.View
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          style={{
            position: 'absolute',
            margin: 'auto',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: 'rgba(237, 242, 247, 0.7)',
            overflow: isOpen ? 'hidden' : 'hidden',
          }}>
          <Center h="100%" w="100%">
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
        </Motion.View>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
