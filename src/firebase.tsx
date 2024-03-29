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
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
} from 'firebase/firestore';

export const app = initializeApp(config);

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
  // 회원가입 후 name과 프로필 이미지 업데이트
  await updateProfile(user, { displayName: name, photoURL });
  return user;
};

export const getCurrentUser = () => {
  const { uid, displayName, email, photoURL } = Auth.currentUser;
  return { uid, name: displayName, email, photo: photoURL };
};

export const updateUserInfo = async (photo: string) => {
  const photoURL = await uploadImage(photo);
  await updateProfile(Auth.currentUser, { photoURL });
  return photoURL;
};

export const signout = async () => {
  await signOut(Auth);
  return;
};

export const db = getFirestore(app);

export const createChannel = async ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  const channelCollection = collection(db, 'channels');
  const newChannelRef = doc(channelCollection);
  const id = newChannelRef.id;
  const newChannel = { id, title, description: desc, createdAt: Date.now() };

  await setDoc(newChannelRef, newChannel);
  return id;
};

export const createMessage = async ({ channelId, message }) => {
  const docRef = doc(db, `channels/${channelId}/messages`, message._id);
  await setDoc(docRef, { ...message, createdAt: Date.now() });
};

// export const createMessage = async ({ channelId, message }) => {
//   const messageCollection = collection(db, `channels/${channelId}/messages`);
//   const newMessageRef = doc(messageCollection);
//   const id = newMessageRef.id;
//   const newMessage = { text: message, createdAt: Date.now() };

//   await setDoc(newMessageRef, newMessage);
// };
