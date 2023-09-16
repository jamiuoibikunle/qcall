import {
  Button,
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

const Register = ({navigation}: any) => {
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
        <VStack gap="$5" pb="$40">
          <VStack gap="$5">
            <Text color="#d42e12">Recent searches</Text>
            <Button
              onPress={() => navigation.navigate('Executives')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Executives
              </Heading>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Legislatives
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
          </VStack>
          <VStack gap="$5">
            <Text color="#d42e12">A-Z List</Text>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Executives
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Fire Service
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Health Service
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Legislatives
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Nigerian Air Force
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Nigerian Army
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Nigerian Navy
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Nigeia Security and Civil Defence
              </Heading>
              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
            <Button
              onPress={() => navigation.navigate('')}
              variant="link"
              bg="transparent">
              <Heading flex={1} numberOfLines={1}>
                Police Force
              </Heading>

              <Feather name="chevron-right" size={30} color="#d42e12" />
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Register;
