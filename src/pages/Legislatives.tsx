import {Button, HStack, Heading, Text, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import useDisclosure from '../hooks/useDisclosure';
import Modal from '../components/Modal';
import ModalBody from '../components/ModalBody';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Linking} from 'react-native';

const Legislatives = ({navigation}: any) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [details, setDetails] = useState({person: '', number: ''});

  const forwardDetails = (person: string, number: string) => {
    return setDetails({person, number});
  };

  return (
    <VStack flex={1} p="$5" gap="$5" bg="white">
      <HStack alignItems="center">
        <Button variant="link" onPress={() => navigation.navigate('Dashboard')}>
          <Feather name="chevron-left" size={30} color="#d42e12" />
        </Button>
        <Heading
          fontSize="$2xl"
          fontWeight="500"
          flex={1}
          textAlign="center"
          color="#d42e12"
          numberOfLines={1}>
          Legislatives' Phone Numbers
        </Heading>
      </HStack>

      <VStack borderWidth={1} borderBottomWidth={0} borderColor="$blueGray300">
        <HStack borderBottomWidth={1} borderColor="$blueGray300" w="$full">
          <Text p="$2" textAlign="center" flex={3} color="#d42e12">
            Office
          </Text>
          <Text
            borderLeftWidth={1}
            borderRightWidth={1}
            borderColor="$blueGray300"
            p="$2"
            textAlign="center"
            flex={2}
            color="#d42e12">
            Name
          </Text>
          <Button p="$2" variant="link" flex={2}>
            <Text textAlign="center" flex={2} color="#d42e12">
              Tel. Number
            </Text>
          </Button>
        </HStack>
        {[
          'Governor',
          'Deputy Governor',
          'LGA Chairman',
          'LGA Vice Chairman',
          'Supervisor 1',
          'Supervisor 2',
          'Supervisor 3',
          'LGA Secretary',
        ].map((el, index) => {
          return (
            <HStack
              key={index}
              borderBottomWidth={1}
              borderColor="$blueGray300"
              w="$full">
              <Text p="$2" flex={3}>
                {el}
              </Text>
              <Text
                borderLeftWidth={1}
                borderRightWidth={1}
                borderColor="$blueGray300"
                p="$2"
                textAlign="center"
                flex={2}
                color="$black"
                numberOfLines={1}>
                Oluseyi Makinde
              </Text>
              <Button
                p="$2"
                variant="link"
                flex={2}
                onPress={() => {
                  forwardDetails(el, '07088115563');
                  onOpen();
                }}>
                <Text textAlign="center" color="#d42e12" numberOfLines={1}>
                  09123456789
                </Text>
              </Button>
            </HStack>
          );
        })}
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
    </VStack>
  );
};

export default Legislatives;
