import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  CloseIcon,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React, {useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ModalBody from '../../components/ModalBody';
import useDisclosure from '../../hooks/useDisclosure';
import Modal from '../../components/Modal';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [details, setDetails] = useState({person: '', number: ''});

  const forwardDetails = (person: string, number: string) => {
    return setDetails({person, number});
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Modal isOpen={isOpen}>
        <ModalBody onClose={onClose}>
          <VStack alignItems="center" gap="$4" w="$full">
            <Heading fontWeight="500" color="#d42e12" fontSize="$2xl">
              Call {details.person}
            </Heading>
            <VStack gap="$4" w="70%" alignItems="flex-start">
              <Button gap="$5" variant="link">
                <Feather size={20} name="phone-call" />
                <Text>Call with phone app</Text>
              </Button>
              <Button gap="$5" variant="link">
                <Feather size={20} name="message-square" />
                <Text>Message with SMS</Text>
              </Button>
              <Button gap="$5" variant="link">
                <FontAwesome size={20} name="whatsapp" />
                <Text>Message with WhatsApp</Text>
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </Modal>
      <VStack gap="$4" flex={1} p="$5">
        <HStack alignItems="center" gap="$3">
          <Center
            bg="rgba(212, 46, 18, 0.25)"
            h="$16"
            w="$16"
            borderRadius="$full">
            <Ionicons color="#d42e12" name="person-outline" size={22} />
          </Center>
          <VStack flex={1}>
            <Heading>Ahmad Bashir</Heading>
            <Text>41'24'12.2"N 2'10'26.5"E</Text>
          </VStack>
          <Box alignSelf="flex-start">
            <SimpleLineIcons color="#d42e12" size={28} name="bell" />
          </Box>
        </HStack>
        <Button variant="link" alignSelf="flex-start">
          <Text color="#d42e12">Report Emergency</Text>
        </Button>
        <HStack flexWrap="wrap" justifyContent="space-between" rowGap="$8">
          <Item
            forwardDetails={forwardDetails}
            onOpen={onOpen}
            image={require('../../../public/health.png')}
            title="Health Emergency"
          />
          <Item
            forwardDetails={forwardDetails}
            onOpen={onOpen}
            image={require('../../../public/fire.png')}
            title="Fire Emergency"
          />
          <Item
            forwardDetails={forwardDetails}
            onOpen={onOpen}
            image={require('../../../public/police.png')}
            title="Health Emergency"
          />
          <Item
            forwardDetails={forwardDetails}
            onOpen={onOpen}
            image={require('../../../public/more.png')}
            title="Fire Emergency"
          />
        </HStack>
        <Image
          source={require('../../../public/map-placeholder.png')}
          w="100%"
        />
      </VStack>
    </ScrollView>
  );
};

const Item = ({
  image,
  title,
  onOpen,
  forwardDetails,
}: {
  image: any;
  title: string;
  onOpen: () => void;
  forwardDetails: (person: string, number: string) => void;
}) => {
  return (
    <Button
      onPress={() => {
        forwardDetails(title, '07088115563');
        onOpen();
      }}
      variant="link"
      w="48%"
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
