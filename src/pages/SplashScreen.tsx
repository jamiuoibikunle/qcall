import React, {useEffect, useState} from 'react';
import {Text, VStack} from '@gluestack-ui/themed';

const SplashScreen = () => {
  const [colorCode, setColorCode] = useState({
    background: '#D42E12',
    color: 'white',
  });

  useEffect(() => {
    setTimeout(() => {
      setColorCode({background: 'white', color: '#D42E12'});
    }, 2000);
  }, []);

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      flex={1}
      bgColor={colorCode.background}>
      <Text fontSize={34} py={20} color={colorCode.color}>
        Q'Call
      </Text>
    </VStack>
  );
};

export default SplashScreen;
