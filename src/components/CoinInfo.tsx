import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: ${({ bold }: { bold?: boolean }) => {
    return bold ? '600' : '400';
  }};
`;

type propsType = {
  symbol: string;
  name: string;
  price: string;
};

const CoinInfo = ({ symbol, name, price }: propsType) => {
  return (
    <Container>
      <StyledText>
        {symbol} ({name})
      </StyledText>
      <StyledText bold={true}>{price}</StyledText>
    </Container>
  );
};

export default CoinInfo;
