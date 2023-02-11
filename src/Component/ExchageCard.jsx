import { VStack, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ExchangeCard({ name, img, rank, url }) {
  return (
    <div>
      <a href={url} target={'blank'}>
        <VStack
          w={'52'}
          p={'8'}
          margin={'8'}
          shadow={'lg'}
          borderRadius={'xl'}
          transition={'all 0.5s'}
          css={{
            "&:hover":{
              transform: "scale(1.1)"
            }
          }}
        >
          <Image
            src={img}
            w={'16'}
            h={'16'}
            objectFit={'contain'}
            alt={'Exchanges'}
          />

          <Heading size={'md'} noOfLines={'1'}>
            {rank}
          </Heading>

          <Text noOfLines={''}>{name}</Text>
        </VStack>
      </a>
    </div>
  );
}

export default ExchangeCard;
