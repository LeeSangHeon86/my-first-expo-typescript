import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface styledPropsType {
  theme: themeType;
}

const Container = styled.View<styledPropsType>`
  position: absolute;
  z-index: 2;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.spinnerBackground};
`;

const Indicator = styled.ActivityIndicator.attrs<styledPropsType>(
  ({ theme }) => ({
    size: 'large',
    color: theme.spinnerIndicator,
  }),
)``;

const Spinner = () => {
  return (
    <Container>
      <Indicator />
    </Container>
  );
};

export default Spinner;
