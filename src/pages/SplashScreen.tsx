import React, {useEffect, useState} from 'react';
import {HStack, Image, Text, VStack, View} from '@gluestack-ui/themed';
import {AnimatePresence, Motion} from '@legendapp/motion';

const SplashScreen = ({navigation}: any) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 2000);

    setTimeout(() => {
      navigation.navigate("Onboarding")
    }, 4000);
  }, []);

  switch (step) {
    case 1:
      return <StepTwo />;

    default:
      return <StepOne />;
  }
};

const StepOne = () => {
  return (
    <AnimatePresence>
      <Motion.View
        initial={{scale: 1, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        exit={{opacity: 0}}
        transition={{type: 'spring'}}
        style={{
          backgroundColor: '#d42e12',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <HStack>
          <Image
            w={50}
            h={50}
            source={require('../../public/logo-white.png')}
          />
          <Text fontSize={45} fontWeight="600" py={20} color="white">
            'call
          </Text>
        </HStack>
      </Motion.View>
    </AnimatePresence>
  );
};

const StepTwo = () => {
  return (
    <AnimatePresence>
      <Motion.View
        initial={{scale: 1, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        exit={{opacity: 0}}
        transition={{type: 'spring'}}
        style={{
          backgroundColor: 'white',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <HStack>
          <Image
            w={50}
            h={50}
            source={require('../../public/logo-colored.png')}
          />
          <Text fontSize={45} fontWeight="600" py={20} color="#D42E12">
            'call
          </Text>
        </HStack>
      </Motion.View>
    </AnimatePresence>
  );
};

export default SplashScreen;
