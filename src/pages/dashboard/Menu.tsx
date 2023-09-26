import {
  Button,
  ButtonIcon,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../types/ReduxInterface';
import {handleClearState} from '../../features/slices/userSlice';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {markWelcomeAsFalse} from '../../features/slices/welcomeSlice';
import {CommonActions} from '@react-navigation/native';

const Menu = ({navigation}: any) => {
  const {info, token} = useSelector((state: RootState) => state.user);

  const dispatchAlert = () =>
    Alert.alert(
      'Comfirm Logout',
      'Are you sure you want to log out from your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            AsyncStorage.clear();
            navigation.dispatch({
              ...CommonActions.reset({
                index: 0,
                routes: [{name: 'SignIn'}],
              }),
            });
          },
        },
      ],
    );

  return (
    <VStack alignItems="center" flex={1} px="$5" py="$10" gap="$10">
      <VStack alignItems="center" gap="$2">
        <Center
          bg="rgba(212, 46, 18, 0.25)"
          h="$20"
          w="$20"
          borderRadius="$full">
          <Ionicons color="#d42e12" name="person-outline" size={22} />
        </Center>
        <Heading>
          {token ? info.firstName + ' ' + info.lastName : 'Guest'}
        </Heading>
        {token ? (
          <Button variant="link" onPress={() => navigation.navigate('Profile')}>
            <Text color="#d42e12">Edit profile</Text>
          </Button>
        ) : null}
      </VStack>
      <VStack alignItems="center" gap="$2">
        <Button w="$full" bg="transparent" gap="$3">
          <MaterialCommunityIcons
            name="chat-question-outline"
            size={25}
            color="#d42e12"
          />
          <Text flex={1} numberOfLines={1} fontWeight="600">
            Frequently asked questions
          </Text>
          <Feather name="chevron-right" size={25} color="#d42e12" />
        </Button>
        <Button w="$full" bg="transparent" gap="$3">
          <Feather name="settings" size={24} color="#d42e12" />
          <Text flex={1} numberOfLines={1} fontWeight="600">
            Settings
          </Text>
          <Feather name="chevron-right" size={25} color="#d42e12" />
        </Button>
        <Button w="$full" bg="transparent" gap="$3">
          <Feather name="help-circle" size={24} color="#d42e12" />
          <Text flex={1} numberOfLines={1} fontWeight="600">
            Help and Support
          </Text>
          <Feather name="chevron-right" size={25} color="#d42e12" />
        </Button>
        {token ? (
          <Button w="$full" bg="transparent" gap="$3" onPress={dispatchAlert}>
            <Feather name="log-out" size={24} color="#d42e12" />
            <Text flex={1} numberOfLines={1} fontWeight="600">
              Log out
            </Text>
            <Feather name="chevron-right" size={25} color="#d42e12" />
          </Button>
        ) : (
          <Button w="$full" bg="transparent" gap="$3" onPress={dispatchAlert}>
            <Feather name="log-out" size={24} color="#d42e12" />
            <Text flex={1} numberOfLines={1} fontWeight="600">
              Go to login
            </Text>
            <Feather name="chevron-right" size={25} color="#d42e12" />
          </Button>
        )}
      </VStack>
    </VStack>
  );
};

export default Menu;
