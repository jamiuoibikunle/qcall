import {
  Box,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Home = () => {
  return (
    <View flex={1} bg="white" p="$5">
      <HStack alignItems="center" gap="$3">
        <Center
          bg="rgba(212, 46, 18, 0.25)"
          h="$16"
          w="$16"
          borderRadius="$full">
          <Ionicons color="#d42e12" name="person-outline" size={22} />
        </Center>
        <VStack flex={1}>
          <Heading>Ahmad Bashir</Heading>
          <Text>41'24'12.2"N 2'10'26.5"E</Text>
        </VStack>
        <Box alignSelf="flex-start">
          <SimpleLineIcons color="#d42e12" size={28} name="bell" />
        </Box>
      </HStack>
    </View>
  );
};

export default Home;
