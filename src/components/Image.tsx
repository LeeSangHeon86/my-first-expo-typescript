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

const Image = ({ url, showButton = false, onChanePhoto }: PropsType) => {
  const _handlePhotoBtnPress = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // All : 모든 파일, Images : 사진(이미지)만
      allowsEditing: true, // 편집 가능
      aspect: [4, 3], // 이미지 사이즈 조정
      quality: 1, // 품질 옵션 0 ~ 1
    });

    console.log(result);

    if (!result.cancelled) {
      onChanePhoto(result['uri']);
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
