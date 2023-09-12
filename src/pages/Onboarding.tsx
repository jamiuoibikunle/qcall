import {
  Button,
  ButtonText,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {AnimatePresence, Motion} from '@legendapp/motion';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';

const Onboarding = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    console.log('Works');
    if (step !== 2) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step !== 0) setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <StepTwo handleNext={handleNext} handlePrevious={handlePrevious} />
      );
    case 2:
      return (
        <StepThree handleNext={handleNext} handlePrevious={handlePrevious} />
      );
    default:
      return (
        <StepOne handleNext={handleNext} handlePrevious={handlePrevious} />
      );
  }
};

const StepOne = ({
  handleNext,
  handlePrevious,
}: {
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  return (
    <AnimatePresence>
      <Motion.View
        key="01"
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 100}}
        style={{flex: 1}}>
        <ImageBackground
          source={require('../../public/background-image.png')}
          style={{flex: 1}}>
          <VStack
            flex={1}
            alignItems="center"
            justifyContent="flex-end"
            gap={50}
            p={24}>
            <Image source={require('../../public/splash01.png')} />
            <Heading
              fontSize={36}
              fontWeight="500"
              textAlign="center"
              color="#D42E12"
              lineHeight={50}>
              Report emergencies with ease
            </Heading>
            <HStack justifyContent="space-between" w="100%">
              <Button variant="link" action="primary">
                <ButtonText color="#D42E12">Skip</ButtonText>
              </Button>
              <Button onPress={handleNext} action="primary" bg="#D42E12">
                <ButtonText>Next</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </ImageBackground>
      </Motion.View>
    </AnimatePresence>
  );
};

const StepTwo = ({
  handleNext,
  handlePrevious,
}: {
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  return (
    <AnimatePresence>
      <Motion.View
        key="01"
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 100}}
        style={{flex: 1}}>
        <ImageBackground
          source={require('../../public/background-image.png')}
          style={{flex: 1}}>
          <VStack
            flex={1}
            alignItems="center"
            justifyContent="flex-end"
            gap={50}
            p={24}>
            <Image source={require('../../public/splash01.png')} />
            <Heading
              fontSize={36}
              fontWeight="500"
              textAlign="center"
              color="#D42E12"
              lineHeight={50}>
              Access a register of relevant emergency numbers
            </Heading>
            <HStack justifyContent="space-between" w="100%">
              <Button variant="link" action="primary">
                <ButtonText color="#D42E12">Skip</ButtonText>
              </Button>
              <Button onPress={handleNext} action="primary" bg="#D42E12">
                <ButtonText>Next</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </ImageBackground>
      </Motion.View>
    </AnimatePresence>
  );
};

const StepThree = ({
  handleNext,
  handlePrevious,
}: {
  handleNext: () => void;
  handlePrevious: () => void;
}) => {
  return (
    <VStack
      //   backgroundColor="linear-gradient(180deg, rgba(212,46,18,1) 0%, rgba(255,255,255,1) 50%)"
      flex={1}
      alignItems="center"
      justifyContent="flex-end"
      gap={45}
      p={24}>
      <Heading
        fontSize={36}
        fontWeight="500"
        textAlign="center"
        color="#D42E12"
        lineHeight={50}>
        Access a register of relevant numbers of public servants
      </Heading>
      <HStack justifyContent="space-between" w="100%">
        <Button
          variant="link"
          action="primary"
          onPress={() => console.log('first')}>
          <ButtonText color="#D42E12">Skip</ButtonText>
        </Button>
        <Button bg="#D42E12">
          <ButtonText>Next</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

export default Onboarding;
