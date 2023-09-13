import {
  Button,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControl,
  FormControlLabel,
  HStack,
  Heading,
  Input,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React from 'react';

const SignIn = ({navigation}: any) => {
  return (
    <View flex={1}>
      <ScrollView>
        <VStack alignItems="center" py={20} gap={20} px={25}>
          <Heading color="#D42E12" fontSize={30} fontWeight="400">
            Sign In
          </Heading>
          <Heading w="100%" fontSize={30} fontWeight="500">
            Welcome back
          </Heading>
          <Text fontSize="$lg" w="100%">
            Enter your login details to access the app or continue as a guest
          </Text>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">E-mail</Text>
            </FormControlLabel>
            <Input />
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Password</Text>
            </FormControlLabel>
            <Input />
          </FormControl>
          <Checkbox value="policy" aria-label="policy" w="100%">
            <CheckboxIndicator borderColor="#D42E12" mr="$2">
              <CheckboxIcon backgroundColor="#D42E12" as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>
              <Text>Remember me</Text>
            </CheckboxLabel>
          </Checkbox>
          <Button w="100%" bg="#d42e12">
            <Text color="white">Sign In</Text>
          </Button>
          <HStack alignItems="center" gap="$1">
            <Text>You don't have a Q'call account?</Text>
            <Button
              variant="link"
              onPress={() => navigation.navigate('SignUp')}>
              <Text color="#d42e12" py={0}>
                Sign Up
              </Text>
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default SignIn;
