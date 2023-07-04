import firebase from './firebase';
import { User } from '../types/index';

export const signup = async (email: string, password: string): Promise<User | null> => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return {
      uid: response.user?.uid,
      email: response.user?.email,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email: string, password: string): Promise<User | null> => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    return {
      uid: response.user?.uid,
      email: response.user?.email,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async (): Promise<void> => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = (): User | null => {
  const user = firebase.auth().currentUser;
  return user ? { uid: user.uid, email: user.email } : null;
};