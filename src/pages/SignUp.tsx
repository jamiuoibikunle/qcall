import {
  Button,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
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
  View,
} from '@gluestack-ui/themed';
import React from 'react';

const SignUp = ({navigation}: any) => {
  return (
    <View flex={1}>
      <ScrollView>
        <VStack alignItems="center" py={20} gap={20} px={25}>
          <Heading color="#D42E12" fontSize={30} fontWeight="400">
            Sign Up
          </Heading>
          <Heading w="100%" fontSize={30} fontWeight="500">
            Hi there 👋
          </Heading>
          <Text fontSize="$lg" w="100%">
            Give us some little details about you to get started
          </Text>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">First name</Text>
            </FormControlLabel>
            <Input>
            <InputField placeholder="" />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Last name</Text>
            </FormControlLabel>
            <Input>
            <InputField placeholder="" />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">E-mail</Text>
            </FormControlLabel>
            <Input>
            <InputField placeholder="" />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Date of Birth</Text>
            </FormControlLabel>
            <Input>
            <InputField placeholder="dd/mm/yy" />
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
                <RadioIndicator mr="$2">
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
                <RadioIndicator mr="$2">
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
                <RadioIndicator mr="$2">
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
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Password</Text>
            </FormControlLabel>
            <Input>
            <InputField placeholder="" />
            </Input>
          </FormControl>
          <Checkbox value="policy" aria-label="policy" w="100%">
            <CheckboxIndicator borderColor="#D42E12" mr="$2">
              <CheckboxIcon backgroundColor="#D42E12" as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>
              <Text>I agree to the Terms and Privacy policy</Text>
            </CheckboxLabel>
          </Checkbox>
          <Button w="100%" bg="#d42e12">
            <Text color="white">Sign Up</Text>
          </Button>
          <HStack alignItems="center" gap="$1">
            <Text>Do you already have a Q'call account?</Text>
            <Button
              variant="link"
              onPress={() => navigation.navigate('SignIn')}>
              <Text color="#d42e12" py={0}>
                Sign In
              </Text>
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default SignUp;
