import { VStack, CircularProgress, Text } from '@chakra-ui/react';
import React from 'react';

function Loader() {
  return (
    <div>
      <VStack justify={'center'} h={'100vh'}>
        <CircularProgress
          size="160px"
          thickness="5px"
          isIndeterminate
          color="gray.600"
        />

        <Text fontSize={'2xl'}>Loading.....</Text>
      </VStack>
    </div>
  );
}

export default Loader;
