import React, {useEffect, useState} from 'react';
import {Text, VStack, View} from '@gluestack-ui/themed';
import {AnimatePresence, Motion} from '@legendapp/motion';

const SplashScreen = ({navigation}: any) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 2000);
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
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{type: 'spring'}}
        style={{
          backgroundColor: '#D42E12',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text fontSize={34} py={20} color="white">
          Q'Call
        </Text>
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
        }}>
        <Text fontSize={34} py={20} color="#D42E12">
          Q'Call
        </Text>
      </Motion.View>
    </AnimatePresence>
  );
};

export default SplashScreen;
