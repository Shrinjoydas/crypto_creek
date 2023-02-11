import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack, Button } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchageCard';
import ErrorComponent from './ErrorComponent';

function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);

  const btns = new Array(6).fill(0);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/exchanges?page=${pages}`
        );
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, [pages]);

  if (error)
    return <ErrorComponent massage={'Error While Fetching Exchanges'} />;

  return (
    <Container maxW={'container.xl'}>
      {/* Main Containt */}

      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} w={'full'} justifyContent={'space-evenly'}>
            {exchanges.map(i => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>

          {/* Page Change Button */}

          <HStack w={'full'} p={'8'} justifyContent={'center'}>
            {btns.map((_, index) => (
              <Button
                key={index}
                backgroundColor={'blackAlpha.700'}
                color={'white'}
                onClick={() => setPages(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}

export default Exchanges;
