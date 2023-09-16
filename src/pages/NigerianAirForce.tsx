import {Button, HStack, Heading, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const NigerianAirForce = ({navigation}: any) => {
  return (
    <VStack flex={1} p="$5" gap="$5" bg="white">
      <HStack alignItems="center">
        <Button variant="link" onPress={() => navigation.navigate('Dashboard')}>
          <Feather name="chevron-left" size={30} color="#d42e12" />
        </Button>
        <Heading
          fontSize="$2xl"
          fontWeight="500"
          flex={1}
          textAlign="center"
          color="#d42e12">
          Executives' Phone Numbers
        </Heading>
      </HStack>
      <VStack borderWidth={1} borderBottomWidth={0} borderColor="$blueGray300">
        <HStack borderBottomWidth={1} borderColor="$blueGray300" w="$full">
          <Text p="$2" textAlign="center" flex={3} color="#d42e12">
            Office
          </Text>
          <Text
            borderLeftWidth={1}
            borderRightWidth={1}
            borderColor="$blueGray300"
            p="$2"
            textAlign="center"
            flex={2}
            color="#d42e12">
            Name
          </Text>
          <Text p="$2" textAlign="center" flex={2} color="#d42e12">
            Tel. Number
          </Text>
        </HStack>
        {[
          'Governor',
          'Deputy Governor',
          'LGA Chairman',
          'LGA Vice Chairman',
          'Supervisor 1',
          'Supervisor 2',
          'Supervisor 3',
          'LGA Secretary',
        ].map((el, index) => (
          <HStack
            key={index}
            borderBottomWidth={1}
            borderColor="$blueGray300"
            w="$full">
            <Text p="$2" flex={3}>
              {el}
            </Text>
            <Text
              borderLeftWidth={1}
              borderRightWidth={1}
              borderColor="$blueGray300"
              p="$2"
              textAlign="center"
              flex={2}
              color="$black"
              numberOfLines={1}>
              Oluseyi Makinde
            </Text>
            <Text
              p="$2"
              textAlign="center"
              flex={2}
              color="#d42e12"
              numberOfLines={1}>
              09123456789
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default NigerianAirForce;
