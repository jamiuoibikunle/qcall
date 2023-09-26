import React, {useEffect, useState} from 'react';
import {HStack, Image, Text, VStack, View} from '@gluestack-ui/themed';
import {AnimatePresence, Motion} from '@legendapp/motion';
import {useSelector} from 'react-redux';
import {RootState} from '../types/ReduxInterface';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const {welcome} = useSelector((state: RootState) => state.welcome);
  const {token} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 2000);

    setTimeout(() => {
      welcome
        ? navigation.dispatch({
            ...CommonActions.reset({
              index: 0,
              routes: [{name: 'Onboarding'}],
            }),
          })
        : token
        ? navigation.dispatch({
            ...CommonActions.reset({
              index: 0,
              routes: [{name: 'Dashboard'}],
            }),
          })
        : navigation.dispatch({
            ...CommonActions.reset({
              index: 0,
              routes: [{name: 'SignIn'}],
            }),
          });
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
        <Image
          h="$20"
          resizeMode="contain"
          source={require('../../public/splash-image01.png')}
        />
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
        <Image
          h="$20"
          resizeMode="contain"
          source={require('../../public/splash-image02.png')}
        />
      </Motion.View>
    </AnimatePresence>
  );
};

export default SplashScreen;
