import { initializeApp } from 'firebase/app';
import config from '../firebase.json';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const app = initializeApp(config);

const Auth = getAuth(app);

export const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { user } = await signInWithEmailAndPassword(Auth, email, password);
  return user;
};

const uploadImage = async (uri: string) => {
  if (uri.startsWith('https')) {
    return uri;
  }

  const response = await fetch(uri);
  const blob = await response.blob();

  // const { uid } = Auth.currentUser;
  const storage = getStorage(app);
  const storageRef = ref(storage, `profile/${Auth.currentUser?.uid}/photo.png`);
  await uploadBytes(storageRef, blob, { contentType: 'image/png' });

  return await getDownloadURL(storageRef);
};

type signupType = {
  name: string;
  email: string;
  password: string;
  photo: string;
};

export const signup = async ({ name, email, password, photo }: signupType) => {
  const { user } = await createUserWithEmailAndPassword(Auth, email, password);
  const photoURL = await uploadImage(photo);
  // await updateProfile(Auth.currentUser, { displayName: name, photoURL });
  await updateProfile(user, { displayName: name, photoURL }); // 회원가입 후 name과 프로필 이미지 업데이트
  return user;
};
