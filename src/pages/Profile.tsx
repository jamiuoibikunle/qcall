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
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../types/ReduxInterface';
import DatePicker from 'react-native-date-picker';
import {updateUserDetails} from '../utils/updateUserDetails';
import {fetchUserDetails} from '../utils/fetchUserDetails';
import {handleUpdateUserInfo} from '../features/slices/userSlice';

const Profile = ({navigation}: any) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const {info, token} = useSelector((state: RootState) => state.user);

  const [date, setDate] = useState(
    new Date(
      `${new Date(info.dateOfBirth).getFullYear()}-${new Date(
        info.dateOfBirth,
      ).getMonth()}-${new Date(info.dateOfBirth).getDay()}`,
    ),
  );
  const [dateModalOpen, setDateModalOpen] = useState(false);

  const [gender, setGender] = useState(info.gender);
  const [firstName, setFirstName] = useState(info.firstName);
  const [lastName, setLastName] = useState(info.lastName);

  return (
    <VStack p="$5" alignItems="center" gap="$8">
      <HStack alignItems="center" position="relative">
        <Button
          onPress={() => navigation.navigate('Dashboard')}
          variant="link"
          position="absolute"
          zIndex={1000}
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
              <InputField
                onChangeText={e => setFirstName(e)}
                value={firstName}
              />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">Last Name</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField onChangeText={e => setLastName(e)} value={lastName} />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <Text color="#d42e12">E-mail</Text>
            </FormControlLabel>
            <Input bg="rgba(212, 46, 18, 0.25)">
              <InputField value={info.email} />
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
                bg="rgba(212, 46, 18, 0.25)"
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
                date={date as any}
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
            <RadioGroup
              as={HStack}
              gap="$5"
              value={gender}
              onChange={e => setGender(e)}>
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
          <Button
            bg="#d42e12"
            onPress={async () => {
              const result = await updateUserDetails({
                token,
                firstName,
                lastName,
                email: info.email,
                gender,
                dateOfBirth: date,
              });

              if (result.status == 200) {
                toast.show({
                  placement: 'bottom',
                  render: ({id}) => {
                    return (
                      <Toast nativeId={id} action="error" variant="solid">
                        <VStack space="xs">
                          <ToastTitle>Request successful</ToastTitle>
                          <ToastDescription>
                            Your details were updated successfully. Redirecting
                            to dashboard.
                          </ToastDescription>
                        </VStack>
                      </Toast>
                    );
                  },
                });

                const handleFetch = async () => {
                  if (token) {
                    const {message} = await fetchUserDetails(token);
                    dispatch(
                      handleUpdateUserInfo({
                        firstName: message.first_name,
                        lastName: message.last_name,
                        email: message.email,
                        gender: message.gender,
                        dateOfBirth: message.date_of_birth,
                      }),
                    );
                  }
                };

                await handleFetch();

                setTimeout(() => {
                  navigation.navigate('Dashboard');
                }, 2500);
              }
            }}>
            <Text color="white">Save Changes</Text>
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Profile;
