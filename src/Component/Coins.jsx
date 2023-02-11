import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import CoinCard from './CoinCard';
import ErrorComponent from './ErrorComponent';

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const btns = new Array(124).fill(0);

  const currencySymbolCoin =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${pages}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, pages]);

  if (error) return <ErrorComponent massage={'Error While Fetching Coins'} />;
  if (loading) return <Loader />;

  return (
    <Container maxW={'container.xl'}>


      {/* Radio Currency Switch  */}

      <RadioGroup onChange={setCurrency} value={currency} p={'8'}>
        <HStack spacing={'8'} justifyContent={'flex-end'}>
          <Radio value={'inr'}>INR</Radio>
          <Radio value={'usd'}>USD</Radio>
          <Radio value={'eur'}>EUR</Radio>
        </HStack>
      </RadioGroup>


      {/* Main Containt */}

      <HStack wrap={'wrap'} w={'full'} justifyContent={'space-evenly'}>
        {coins.map((i) => (
          <CoinCard
            name={i.name}
            key={i.id}
            id={i.id}
            img={i.image}
            symbol={i.symbol}
            price={i.current_price}
            currencySymbol={currencySymbolCoin}
          />
        ))}
      </HStack>


      {/* Page Change Button */}

      <HStack w={'full'} p={'8'} overflowX={'auto'}>
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
    </Container>
  );
}

export default Coins;
