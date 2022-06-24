import React, { useState } from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Container = styled.View`
  margin-bottom: 30px;
`;

interface styledPropsType {
  theme: themeType;
}

const ProfileImage = styled.Image<styledPropsType>`
  background-color: ${({ theme }) => theme.imgBackground};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ButtonConatiner = styled.TouchableOpacity<styledPropsType>`
  background-color: ${({ theme }) => theme.imgBtnBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs<styledPropsType>(
  ({ theme }) => ({
    name: 'photo-camera',
    size: 22,
    color: theme.imgBtnIcon,
  }),
)``;

const PhotoButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <ButtonConatiner onPress={onPress}>
      <ButtonIcon></ButtonIcon>
    </ButtonConatiner>
  );
};

interface PropsType {
  url?: string;
  showButton?: boolean;
  onChanePhoto: (text: string) => void;
}

const faceLogo =
  'https://firebasestorage.googleapis.com/v0/b/react-native-chat-app-d8603.appspot.com/o/face.png?alt=media';

const Image = ({ url, showButton = false, onChanePhoto }: PropsType) => {
  const _handlePhotoBtnPress = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (result.cancelled === false) {
      onChanePhoto(result.uri);
    }
  };

  return (
    <Container>
      <ProfileImage source={{ uri: url }} resizeMode="contain" />
      {showButton && <PhotoButton onPress={_handlePhotoBtnPress} />}
    </Container>
  );
};

export default Image;
