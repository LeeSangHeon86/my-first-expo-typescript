import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { themeType } from '../theme';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../navigations/Home';
import { MaterialIcons } from '@expo/vector-icons';
import { app } from '../firebase';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import moment from 'moment';

const getDataOrTime = (ts: number) => {
  const now = moment().startOf('day');
  const target = moment(ts).startOf('day');
  return moment(ts).format(now.diff(target, 'day') > 0 ? 'MM/DD' : 'HH:mm');
};

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
  onPress: (params: object) => void;
}

const Item = React.memo(
  ({ item: { id, title, description, createdAt }, onPress }: itemProps) => {
    return (
      <ItemContainer onPress={() => onPress({ id, title })}>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDesc>{description}</ItemDesc>
        </ItemTextContainer>
        <ItemTime>{getDataOrTime(createdAt)}</ItemTime>
        <ItemIcon />
      </ItemContainer>
    );
  },
);

const ChannelList = ({ navigation }: Props) => {
  const [channels, setChannels] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const collectionQuery = query(
      collection(db, 'channels'),
      orderBy('createdAt', 'desc'),
    );

    const unsubscribe = onSnapshot(collectionQuery, snapshot => {
      const list = [];
      snapshot.forEach(doc => list.push(doc.data()));

      setChannels(list);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <StyledText>Channel List</StyledText>
      <FlatList
        data={channels}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            item={item}
            onPress={({ id, title }: { id: string; title: string }) => {
              navigation.navigate('Channel', { id, title });
            }}
          />
        )}
        // keyExtractor={item => item['id'].toString()}
        windowSize={5}
      />
    </Container>
  );
};

export default ChannelList;
