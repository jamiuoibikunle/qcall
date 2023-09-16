import {View} from '@gluestack-ui/themed';
import {AnimatePresence, Motion} from '@legendapp/motion';
import React from 'react';

const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.View
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          {children}
        </Motion.View>
      )}
    </AnimatePresence>
  );
};

export default Modal;
