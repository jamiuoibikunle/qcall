import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Home = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <VStack gap="$4" flex={1} p="$5">
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
        <Button variant="link" alignSelf="flex-start">
          <Text color="#d42e12">Report Emergency</Text>
        </Button>
        <HStack flexWrap="wrap" justifyContent="space-between" rowGap="$8">
          <Item
            image={require('../../../public/health.png')}
            title="Health Emergency"
          />
          <Item
            image={require('../../../public/fire.png')}
            title="Fire Emergency"
          />
          <Item
            image={require('../../../public/police.png')}
            title="Health Emergency"
          />
          <Item
            image={require('../../../public/more.png')}
            title="Fire Emergency"
          />
        </HStack>
        <Image
          source={require('../../../public/map-placeholder.png')}
          w="100%"
        />
      </VStack>
    </ScrollView>
  );
};

const Item = ({image, title}: {image: any; title: string}) => {
  return (
    <VStack
      w="48%"
      h="$40"
      justifyContent="center"
      alignItems="center"
      gap="$5"
      p="$5"
      borderRadius="$md"
      borderWidth="$1"
      borderColor="$backgroundDark200">
      <Image source={image} />
      <Text>{title}</Text>
    </VStack>
  );
};

export default Home;
