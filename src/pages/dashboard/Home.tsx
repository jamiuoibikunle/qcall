import {
  Box,
  Button,
  ButtonText,
  Center,
  CloseIcon,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React, {useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomModal from '../../components/CustomModal';
import useDisclosure from '../../hooks/useDisclosure';

const Home = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <VStack>
          <Heading>Call LGA Vice Chairman</Heading>
        </VStack>
      </CustomModal>
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
            onOpen={onOpen}
            image={require('../../../public/health.png')}
            title="Health Emergency"
          />
          <Item
            onOpen={onOpen}
            image={require('../../../public/fire.png')}
            title="Fire Emergency"
          />
          <Item
            onOpen={onOpen}
            image={require('../../../public/police.png')}
            title="Health Emergency"
          />
          <Item
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
}: {
  image: any;
  title: string;
  onOpen: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  return (
    <Button
      onPress={onOpen}
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
