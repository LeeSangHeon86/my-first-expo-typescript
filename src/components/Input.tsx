import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';
import { Dimensions, useWindowDimensions } from 'react-native';

const StyledInput = styled.TextInput`
  width: ${({ width }: { width: number }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }: themeType) => theme.itemBackground};
  color: ${({ theme }: themeType) => theme.text};
  border: 1px solid white;
`;

export default function Input() {
  // const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return <StyledInput width={width} />;
}
