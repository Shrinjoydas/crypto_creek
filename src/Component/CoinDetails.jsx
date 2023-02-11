import {
  Container,
  HStack,
  Box,
  Radio,
  RadioGroup,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
import Chart from './Chart';

function CoinDetails() {
  const [coins, setCoins] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [days, setDays] = useState('24h');
  const [cahrtArr, setChartArr] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const { id } = useParams();

  const btns = ['24h', '7d', '30d', '90d', '365d', 'max'];

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );

        const { data: chartData } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoins(data);
        setChartArr(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoinDetails();
  }, [id, currency, days]);

  if (error) return <ErrorComponent massage={'Error While Fetching Coins'} />;
  if (loading) return <Loader />;

  return (
    <Container maxW={'container.xl'} >
      {/* Chart */}

      <Box w={'full'} borderWidth={1} my={'4'}>
        <Chart currencylogo={currencySymbol} arr={cahrtArr} days={days} />
      </Box>

      {/* Button Days Switches */}

      <HStack p={'4'} gap={'4'} my={'4'} wrap={'wrap'} >
        {
        btns.map((item) => (
          <Button onClick={()=>setDays(item)}>{item}</Button>
        ))}
      </HStack>

      {/* Radio Currency Switch  */}

      <RadioGroup onChange={setCurrency} value={currency} p={'8'}>
        <HStack spacing={'8'}>
          <Radio value={'inr'}>INR</Radio>
          <Radio value={'usd'}>USD</Radio>
          <Radio value={'eur'}>EUR</Radio>
        </HStack>
      </RadioGroup>

      {/* Main Containt */}

      <VStack p={'16'} alignItems={'flex-start'} gap={'4'}>
        <Text
          fontSize={{ base: 'small', md: 'md', lg: 'xl' }}
          alignSelf={'center'}
          opacity={'0.7'}
        >
          Last Update On {Date(coins.market_data.last_updated).split('G')[0]}
        </Text>
        <Image
          src={coins.image.large}
          w={'16'}
          h={'16'}
          // objectFit={'contain'}
        />

        <Stat>
          <StatLabel>{coins.name}</StatLabel>
          <StatNumber>
            {currencySymbol} {coins.market_data.current_price[currency]}
          </StatNumber>

          <StatHelpText>
            <StatArrow
              type={
                coins.market_data.price_change_percentage_24h < 0
                  ? 'decrease'
                  : 'increase'
              }
            />
            {coins.market_data.price_change_percentage_24h}%
          </StatHelpText>
        </Stat>

        <Badge fontSize={'2xl'} bgColor={'blackAlpha.800'} color={'white'}>
          #{coins.market_cap_rank}
        </Badge>

        <CustomBar
          high={`${currencySymbol} ${coins.market_data.high_24h[currency]}`}
          low={`${currencySymbol} ${coins.market_data.low_24h[currency]}`}
        />

        <Box w={'full'} p={'4'}>
          <Item title={'Max Supply'} value={coins.market_data.max_supply} />
          <Item
            title={'Circulating Supply'}
            value={coins.market_data.circulating_supply}
          />
          <Item
            title={'Market Cap'}
            value={`${currencySymbol}${coins.market_data.market_cap[currency]}`}
          />
          <Item
            title={'All Time Low'}
            value={`${currencySymbol} ${coins.market_data.atl[currency]}`}
          />
          <Item
            title={'All Time High'}
            value={`${currencySymbol} ${coins.market_data.ath[currency]}`}
          />
        </Box>
      </VStack>
    </Container>
  );
}

const CustomBar = ({ high, low }) => (
  <VStack w={'full'}>
    <Progress value={70} w={'full'} colorScheme={'teal'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />
      <Text fontSize={'sm'}>24h Range</Text>
      <Badge children={high} colorScheme={'green'} />
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

export default CoinDetails;
