import { initializeApp } from 'firebase/app';
import config from '../firebase.json';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
