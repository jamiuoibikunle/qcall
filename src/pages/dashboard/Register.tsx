import {
  FormControl,
  HStack,
  Heading,
  Input,
  InputField,
  InputIcon,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Register = () => {
  return (
    <VStack w="$full" p="$5" alignItems="center" gap="$5">
      <Heading color="#d42e12" fontSize="$2xl">
        Phone Number Register
      </Heading>
      <FormControl w="$full">
        <Input>
          <InputIcon p="$1">
            <Feather name="search" color="#d42e12" size={25} />
          </InputIcon>
          <InputField placeholder="Search" placeholderTextColor="#d42e12" />
        </Input>
      </FormControl>
      <ScrollView w="$full">
        <VStack gap="$5">
          <VStack gap="$5">
            <Text color="#d42e12">Recent searches</Text>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Executives</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Legislatives</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
          </VStack>
          <VStack gap="$5">
            <Text color="#d42e12">A-Z List</Text>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Executives</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Fire Service</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Health Service</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Legislatives</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Nigerian Air Force</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Nigerian Army</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Nigerian Navy</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>
                  Nigeria Security and Civil Defence
                </Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
            <HStack alignItems="center">
              <VStack flex={1}>
                <Heading numberOfLines={1}>Police Force</Heading>
              </VStack>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Register;
