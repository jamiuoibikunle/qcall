import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ModalBody from '../../components/ModalBody';
import useDisclosure from '../../hooks/useDisclosure';
import Modal from '../../components/Modal';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Linking} from 'react-native';
import {fetchUserDetails} from '../../utils/fetchUserDetails';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../types/ReduxInterface';
import {handleUpdateUserInfo} from '../../features/slices/userSlice';
import {fetchLocation} from '../../utils/fetchLocation';
import Geolocation from '@react-native-community/geolocation';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {token, info} = useSelector((state: RootState) => state.user);

  const [location, setLocation] = useState({
    fetched: false,
    county: '',
    city: '',
    state: '',
    country: '',
  });

  useEffect(() => {
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

      Geolocation.getCurrentPosition(
        async ({coords: {latitude, longitude}}) => {
          const {
            components: {county, city, state, country},
          } = await fetchLocation(`${latitude},${longitude}`);

          setLocation({
            fetched: true,
            county,
            city,
            state,
            country,
          });
        },
      );
    };

    handleFetch();
  }, [token]);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [details, setDetails] = useState({person: '', number: ''});

  const forwardDetails = (person: string, number: string) => {
    return setDetails({person, number});
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <VStack gap="$4" flex={1} p="$5">
        <HStack alignItems="center" gap="$3">
          <Button variant="link" onPress={() => navigation.navigate('Profile')}>
            <Center
              bg="rgba(212, 46, 18, 0.25)"
              h="$16"
              w="$16"
              borderRadius="$full">
              <Ionicons color="#d42e12" name="person-outline" size={22} />
            </Center>
          </Button>
          <VStack flex={1}>
            {token ? (
              <Heading>{`${info.firstName} ${info.lastName}`}</Heading>
            ) : (
              <Heading>Guest</Heading>
            )}
            <Text numberOfLines={1}>
              {location.fetched === false
                ? 'Fetching location'
                : `${location.county}, ${location.state}`}
            </Text>
          </VStack>
          <Box alignSelf="flex-start">
            <SimpleLineIcons color="#d42e12" size={22} name="bell" />
          </Box>
        </HStack>
        <Button variant="link" alignSelf="flex-start">
          <Text color="#d42e12">Report Emergency</Text>
        </Button>
        <VStack gap="$5">
          <HStack justifyContent="space-between" gap="$5">
            <Item
              loaded={location.fetched}
              forwardDetails={forwardDetails}
              onOpen={onOpen}
              image={require('../../../public/health.png')}
              title="Health Emergency"
            />
            <Item
              loaded={location.fetched}
              forwardDetails={forwardDetails}
              onOpen={onOpen}
              image={require('../../../public/fire.png')}
              title="Fire Emergency"
            />
          </HStack>
          <HStack justifyContent="space-between" gap="$5">
            <Item
              loaded={location.fetched}
              forwardDetails={forwardDetails}
              onOpen={onOpen}
              image={require('../../../public/police.png')}
              title="Police Emergency"
            />
            <Item
              loaded={location.fetched}
              forwardDetails={forwardDetails}
              onOpen={onOpen}
              image={require('../../../public/more.png')}
              title="More"
            />
          </HStack>
        </VStack>
        <Image
          source={require('../../../public/map-placeholder.png')}
          w="100%"
        />
      </VStack>
      <Modal isOpen={isOpen}>
        <ModalBody onClose={onClose}>
          <VStack alignItems="center" gap="$4" w="$full">
            <Heading fontWeight="500" color="#d42e12" fontSize="$2xl">
              Call {details.person}
            </Heading>
            <VStack gap="$4" w="70%" alignItems="flex-start">
              <Button
                onPress={() => Linking.openURL(`tel:911`)}
                gap="$5"
                variant="link">
                <Feather color="black" size={20} name="phone-call" />
                <Text>Call with phone app</Text>
              </Button>
              <Button
                onPress={() => Linking.openURL(`sms:911`)}
                gap="$5"
                variant="link">
                <Feather color="black" size={20} name="message-square" />
                <Text>Message with SMS</Text>
              </Button>
              <Button
                onPress={() => Linking.openURL(`https:wa.me/911`)}
                gap="$5"
                variant="link">
                <FontAwesome color="black" size={20} name="whatsapp" />
                <Text>Message with WhatsApp</Text>
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </Modal>
    </ScrollView>
  );
};

const Item = ({
  image,
  title,
  onOpen,
  forwardDetails,
  loaded,
}: {
  image: any;
  title: string;
  onOpen: () => void;
  forwardDetails: (person: string, number: string) => void;
  loaded: boolean;
}) => {
  return (
    <Button
      onPress={() => {
        forwardDetails(title, '07088115563');
        onOpen();
      }}
      isDisabled={!loaded}
      variant="link"
      flex={1}
      h="$40"
      p="$5"
      borderRadius="$md"
      borderWidth="$1"
      borderColor="$backgroundDark200">
      <VStack justifyContent="center" alignItems="center" gap="$5">
        <Image source={image} />
        <Text>{title}</Text>
      </VStack>
    </Button>
  );
};

export default Home;
