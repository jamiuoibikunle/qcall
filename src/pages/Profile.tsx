import {
  Button,
  Center,
  CircleIcon,
  FormControl,
  FormControlLabel,
  HStack,
  Heading,
  Input,
  InputField,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}: any) => {
  return (
    <VStack p="$5" alignItems="center" gap="$8">
      <HStack alignItems="center" position="relative">
        <Button
          onPress={() => navigation.goBack()}
          variant="link"
          position="absolute"
          left={0}>
          <Feather name="chevron-left" size={25} color="#d42e12" />
        </Button>
        <Heading flex={1} textAlign="center" fontSize="$2xl" color="#d42e12">
          Edit Profile
        </Heading>
      </HStack>
      <Center
        bg="rgba(212, 46, 18, 0.25)"
        h="$32"
        w="$32"
        borderRadius="$full"
        position="relative">
        <Center
          bg="#d42e12"
          h="$10"
          w="$10"
          borderRadius="$full"
          position="absolute"
          right={0}
          bottom={0}>
          <Feather name="camera" size={15} />
        </Center>
        <Ionicons color="#d42e12" name="person-outline" size={40} />
      </Center>
      <ScrollView w="$full">
        <VStack w="$full" gap="$5">
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">First Name</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">Last Name</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">E-mail</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">Age</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Gender</Text>
            </FormControlLabel>
            <RadioGroup as={HStack} gap="$5">
              <Radio
                value="male"
                size="md"
                isInvalid={false}
                isDisabled={false}>
                <RadioIndicator borderColor="#D42E12" mr="$2">
                  <RadioIcon
                    style={{color: '#D42E12'}}
                    as={CircleIcon}
                    strokeWidth={1}
                  />
                </RadioIndicator>
                <RadioLabel>Male</RadioLabel>
              </Radio>
              <Radio
                value="female"
                size="md"
                isInvalid={false}
                isDisabled={false}>
                <RadioIndicator borderColor="#D42E12" mr="$2">
                  <RadioIcon
                    style={{color: '#D42E12'}}
                    as={CircleIcon}
                    strokeWidth={1}
                  />
                </RadioIndicator>
                <RadioLabel>Female</RadioLabel>
              </Radio>
              <Radio
                value="other"
                size="md"
                isInvalid={false}
                isDisabled={false}>
                <RadioIndicator borderColor="#D42E12" mr="$2">
                  <RadioIcon
                    style={{color: '#D42E12'}}
                    as={CircleIcon}
                    strokeWidth={1}
                  />
                </RadioIndicator>
                <RadioLabel>Other</RadioLabel>
              </Radio>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">Password</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField type="password" />
            </Input>
            <Button variant="link" alignSelf="flex-start">
              <Text color="#d42e12">Change password</Text>
            </Button>
          </FormControl>
          <Button bg="#d42e12">
            <Text color="white">Save Changes</Text>
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Profile;
