import {
  Button,
  ButtonText,
  HStack,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';

const Onboarding = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
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
        Report emergencies with ease
      </Heading>
      <HStack justifyContent="space-between" w="100%">
        <Button variant="link" action="primary">
          <ButtonText color="#D42E12">Skip</ButtonText>
        </Button>
        <Button bg="#D42E12">
          <ButtonText>Next</ButtonText>
        </Button>
      </HStack>
    </VStack>
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
        Report emergencies with ease
      </Heading>
      <HStack justifyContent="space-between" w="100%">
        <Button variant="link" action="primary">
          <ButtonText color="#D42E12">Skip</ButtonText>
        </Button>
        <Button bg="#D42E12">
          <ButtonText>Next</ButtonText>
        </Button>
      </HStack>
    </VStack>
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
        Report emergencies with ease
      </Heading>
      <HStack justifyContent="space-between" w="100%">
        <Button variant="link" action="primary">
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
