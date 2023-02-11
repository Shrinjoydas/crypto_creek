import { VStack, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function CoinCard({ id, name, img, symbol, price, currencySymbol}) {
  return (
    <Link to= {`/coins/${id}`} targer={"blank"}>
      <VStack
        w={'52'}
        p={'8'}
        margin={'8'}
        shadow={'lg'}
        borderRadius={'xl'}
        transition={'all 0.5s'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          src={img}
          w={'16'}
          h={'16'}
          objectFit={'contain'}
          alt={'Coins'}
        />

        <Heading size={'md'} noOfLines={'1'}>
          {symbol}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : 'NA'}</Text>
      </VStack>
    </Link>
  );
}

export default CoinCard;
