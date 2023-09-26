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
  InputField,
  InputIcon,
  ScrollView,
  Text,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  View,
  useToast,
} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {handleSignIn} from '../utils/handleSignIn';
import {useDispatch} from 'react-redux';
import {handleUpdateToken} from '../features/slices/userSlice';

const SignIn = ({navigation}: any) => {
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    // navigation.reset();
  }, []);

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(showPassword => {
      return !showPassword;
    });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <Input>
              <InputField
                defaultValue={email}
                onChangeText={e => setEmail(e)}
                placeholder=""
                placeholderTextColor="#d42e12"
              />
            </Input>
          </FormControl>
          <FormControl w="100%">
            <FormControlLabel>
              <Text color="#D42E12">Password</Text>
            </FormControlLabel>
            <Input>
              <InputField
                defaultValue={password}
                onChangeText={e => setPassword(e)}
                type={showPassword ? 'text' : 'password'}
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
          <Checkbox value="policy" aria-label="policy" w="100%">
            <CheckboxIndicator borderColor="#D42E12" mr="$2">
              <CheckboxIcon backgroundColor="#D42E12" as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>
              <Text>Remember me</Text>
            </CheckboxLabel>
          </Checkbox>
          <Button
            isDisabled={!email || !password}
            w="100%"
            bg="#d42e12"
            onPress={async () => {
              setLoading(true);

              const response = await handleSignIn({
                email,
                password,
              });

              console.log(response);

              if (response.status == 400) {
                setLoading(false);
                return toast.show({
                  placement: 'bottom',
                  render: ({id}) => {
                    return (
                      <Toast nativeId={id} action="error" variant="solid">
                        <VStack space="xs">
                          <ToastTitle>Incorrect credentials</ToastTitle>
                          <ToastDescription>
                            Your login details are incorrect. Kindly check and
                            try again.
                          </ToastDescription>
                        </VStack>
                      </Toast>
                    );
                  },
                });
              } else if (response.status == 200) {
                setLoading(false);
                dispatch(handleUpdateToken(response.token));
                return navigation.navigate('Dashboard');
              }

              setLoading(false);
              return toast.show({
                placement: 'bottom',
                render: ({id}) => {
                  return (
                    <Toast nativeId={id} action="error" variant="solid">
                      <VStack space="xs">
                        <ToastTitle>Error signing you in</ToastTitle>
                        <ToastDescription>
                          There was an error while we tried to sign you in.
                          Kindly try again.
                        </ToastDescription>
                      </VStack>
                    </Toast>
                  );
                },
              });
            }}>
            <Text color="white">Sign In</Text>
          </Button>
          <Text>Or</Text>
          <Button
            variant="link"
            onPress={() => navigation.navigate('Dashboard')}>
            <Text color="#d42e12">Continue as a guest</Text>
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
