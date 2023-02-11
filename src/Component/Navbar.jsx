import { Button, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Heading
      position={'sticky'}
      top={'0'}
      justify-content={'flex-start'}
      w={'full'}
      backgroundColor={'blackAlpha.900'}
      shadow={'base'}
      zIndex={10}
      mx={['2','0']}
    >
      <HStack p={'4'} gap={'4'}>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/coins">Coins</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
      </HStack>
    </Heading>
  );
}

export default Navbar;
