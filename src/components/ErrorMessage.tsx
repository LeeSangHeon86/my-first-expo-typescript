import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface styledPropsType {
  theme: themeType;
}

const StyledText = styled.Text<styledPropsType>`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorTet};
`;

const ErrorMessage = ({ message }: { message: string }) => {
  return <StyledText>{message}</StyledText>;
};

export default ErrorMessage;
