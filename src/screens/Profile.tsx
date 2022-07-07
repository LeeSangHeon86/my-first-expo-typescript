import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { themeType } from '../theme';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../navigations/Home';
import { getCurrentUser, updateUserInfo, signout } from '../firebase';
import { Alert } from 'react-native';
import { ProgressContext } from '../contexts/Progress';
import { ThemeContext } from 'styled-components/native';

interface styledPropsType {
  theme: themeType;
}

const Container = styled.View<styledPropsType>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

type ProfileScreenNavPropsType = BottomTabNavigationProp<
  HomeTabParamList,
  'Profile'
>;
type Props = {
  navigation: ProfileScreenNavPropsType;
};

export default function Profile({ navigation }: Props) {
  const { setUser } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const user = getCurrentUser();

  const [photo, setPhoto] = useState(user.photo);

  const { spinner } = useContext(ProgressContext);

  const _handlePhotoChange = async (url: string) => {
    try {
      spinner.start();
      const photoURL = await updateUserInfo(url);
      setPhoto(photoURL);
    } catch (e) {
      Alert.alert('Photo upload Error');
    } finally {
      spinner.stop();
    }
  };

  return (
    <Container>
      <Image url={photo} onChanePhoto={_handlePhotoChange} showButton />
      <Input label="Name" value={user.name} disabled />
      <Input label="Email" value={user.email} disabled />
      <Button
        title="Logout"
        // onPress={() => setUser({ uid: null })}
        onPress={async () => {
          try {
            spinner.start();
            await signout();
          } catch (e) {
          } finally {
            setUser({ uid: null });
            spinner.stop();
          }
        }}
        containerStyle={{ backgroundColor: theme.btnSignout }}
      />
    </Container>
  );
}
