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
  InputIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  Text,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  View,
  useToast,
} from '@gluestack-ui/themed';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import {validateEmail} from '../utils/validateEmail';
import {handleSignUp} from '../utils/handleSignUp';

const SignUp = ({navigation}: any) => {
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(showPassword => {
      return !showPassword;
    });
  };

  const [date, setDate] = useState(new Date('2013-01-01'));
  const [dateModalOpen, setDateModalOpen] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const [agreedToPolicies, setAgreedToPolicies] = useState(false);

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
              <InputField
                onChangeText={e => setFirstName(e)}
                defaultValue={firstName}
                placeholder=""
                placeholderTextColor="#d42e12"
              />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Last name</Text>
            </FormControlLabel>
            <Input>
              <InputField
                onChangeText={e => setLastName(e)}
                defaultValue={lastName}
                placeholder=""
                placeholderTextColor="#d42e12"
              />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">E-mail</Text>
            </FormControlLabel>
            <Input>
              <InputField
                onChangeText={e => setEmail(e)}
                defaultValue={email}
                placeholder=""
                placeholderTextColor="#d42e12"
              />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Date of Birth</Text>
            </FormControlLabel>
            <Input>
              <Button
                borderWidth={0}
                w="100%"
                variant="outline"
                onPress={() => setDateModalOpen(true)}>
                <Text textAlign="left" w="100%">
                  {date.toLocaleDateString()}
                </Text>
              </Button>
              <DatePicker
                modal
                minimumDate={new Date('1873-01-01')}
                maximumDate={new Date('2013-01-01')}
                mode="date"
                open={dateModalOpen}
                date={date}
                onConfirm={date => {
                  setDateModalOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setDateModalOpen(false);
                }}
              />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Gender</Text>
            </FormControlLabel>
            <RadioGroup onChange={e => setGender(e)} as={HStack} gap="$5">
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
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Password</Text>
            </FormControlLabel>
            <Input>
              <InputField
                onChangeText={e => setPassword(e)}
                type={!showPassword ? 'password' : 'text'}
                placeholder=""
                placeholderTextColor="#d42e12"
              />
              <InputIcon pr="$3" onPress={handlePasswordVisibility}>
                {!showPassword ? (
                  <Feather color="#d42e12" size={20} name="eye" />
                ) : (
                  <Feather color="#d42e12" size={20} name="eye-off" />
                )}
              </InputIcon>
            </Input>
          </FormControl>
          <Checkbox
            onChange={e => setAgreedToPolicies(e)}
            value="policy"
            aria-label="policy"
            w="100%">
            <CheckboxIndicator borderColor="#D42E12" mr="$2">
              <CheckboxIcon backgroundColor="#D42E12" as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>
              <Text>I agree to the Terms and Privacy policy</Text>
            </CheckboxLabel>
          </Checkbox>
          <Button
            isDisabled={
              !firstName ||
              !lastName ||
              !email ||
              !date ||
              !gender ||
              !password ||
              !agreedToPolicies
            }
            w="100%"
            bg="#d42e12"
            onPress={async () => {
              const valid = validateEmail(email);
              if (!valid) {
                return toast.show({
                  placement: 'bottom',
                  render: ({id}) => {
                    return (
                      <Toast nativeId={id} action="info" variant="solid">
                        <VStack space="xs">
                          <ToastTitle>Invalid email address</ToastTitle>
                          <ToastDescription>
                            The email you have provided doesn't seem to be
                            valid. Please check and try again.
                          </ToastDescription>
                        </VStack>
                      </Toast>
                    );
                  },
                });
              }

              const submitted = await handleSignUp({
                firstName,
                lastName,
                email,
                dateOfBirth: date,
                gender,
                password,
              });
              console.log(submitted);

              // navigation.navigate('Dashboard');
            }}>
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
