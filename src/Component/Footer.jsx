import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import photo from '../Assets/IMG_20190930_115106381_HDR.jpg'

function Footer() {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={['16', '8']}
      py={'16'}
    >
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={['center', 'flex-start']} my={['0', '8']} >
          <Text fontWeight={'bold'} fontSize={['lg', '2xl']} >About us</Text>
          <Text
            fontSize={['sm', 'medium']}
            textAlign={['center', 'left']}
            letterSpacing={'widest'}
          >
            We are the best crypto trading app in India, we provide our guidance
            at resanable price
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={'28'} 
          mt={['4', '0']}
          src={photo}
           />
          <Text>Our Founder</Text>
        </VStack>

      </Stack>
    </Box>
  );
}

export default Footer;
