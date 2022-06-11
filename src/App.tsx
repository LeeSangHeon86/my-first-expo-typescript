import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import CoinInfo from './components/CoinInfo';
import { dataType, useFetch } from './hooks/useFetch';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const URL = 'https://api.coinlore.net/api/tickers/?limit=3';
  const data: dataType = useFetch(URL);
  const renderData = data.data;

  return (
    <Container>
      <StatusBar style="auto" />
      {/* <Counter /> */}
      {isVisible && <Form />}
      <Button
        title="on/off"
        onPress={() => setIsVisible(isVisible => !isVisible)}
      />

      {renderData.map(
        (coin: {
          id: string;
          symbol: string;
          name: string;
          price_usd: string;
        }) => {
          return (
            <CoinInfo
              key={coin.id}
              symbol={coin.symbol}
              name={coin.name}
              price={coin.price_usd}
            />
          );
        },
      )}
    </Container>
  );
}
