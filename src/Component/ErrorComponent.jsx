import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

function ErrorComponent({ massage }) {
  return (
    <Alert
      status="error"
      pos={'fixed'}
      top={'75px'}
      transform={'translateX(-50%'}
      w={'container.lg'}
    >
      <AlertIcon />
      {massage}
    </Alert>
  );
}

export default ErrorComponent;
