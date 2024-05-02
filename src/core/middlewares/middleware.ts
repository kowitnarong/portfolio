import { middlewareFirebaseInit } from './firebase/firebase';

export const MiddlewareInit = async () => {
  await middlewareFirebaseInit();
};
