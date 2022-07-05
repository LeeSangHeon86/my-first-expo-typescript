import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Button } from '../components';
import { themeType } from '../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../navigations/Home';
import { MaterialIcons } from '@expo/vector-icons';

interface ThemeProps {
  theme: themeType;
}

const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

type ListScreenNavPropsType = BottomTabNavigationProp<HomeTabParamList, 'List'>;

type Props = {
  navigation: ListScreenNavPropsType;
};

const channels = [];
for (let i = 0; i < 1000; i++) {
  channels.push({
    id: i,
    title: `title: ${i}`,
    description: `desc: ${i}`,
    createdAt: i,
  });
}

const ItemContainer = styled.TouchableOpacity<ThemeProps>`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.itemBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ItemTitle = styled.Text<ThemeProps>`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const ItemDesc = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.itemDesc};
`;

const ItemTime = styled.Text<ThemeProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.itemTime};
`;

const ItemIcon = styled(MaterialIcons).attrs(({ theme }) => {
  return {
    name: 'keyboard-arrow-right',
    size: 24,
    color: theme.itemIcon,
  };
})``;

interface itemProps {
  item: {
    id: string;
    title: string;
    description: string;
    createdAt: number;
  };
  onPress: () => void;
}

const Item = React.memo(
  ({ item: { id, title, description, createdAt }, onPress }: itemProps) => {
    console.log(id);

    return (
      <ItemContainer>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDesc>{description}</ItemDesc>
        </ItemTextContainer>
        <ItemTime>{createdAt}</ItemTime>
        <ItemIcon />
      </ItemContainer>
    );
  },
);

const ChannelList = ({ navigation }: Props) => {
  return (
    <Container>
      <StyledText>Channel List</StyledText>
      <FlatList
        data={channels}
        renderItem={({ item }) => <Item item={item} onPress={() => {}} />}
        keyExtractor={item => item['id'].toString()}
        windowSize={5}
      />
    </Container>
  );
};

export default ChannelList;
