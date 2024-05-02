import APIFirebase from './firebase/firebase';
import APIRealtimeDatabase from './firebase/firebase';
import { TypeRepositoryPattern } from './repository-pattern';

const APIGlobal: TypeRepositoryPattern = {
  ...APIFirebase,
  ...APIRealtimeDatabase,
};

export default APIGlobal;
