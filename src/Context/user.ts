import {createContext, useContext} from 'react';

export interface UserContext {
  username: string;
  setUsername: (c: string) => void;
}

export const UserContext = createContext<UserContext>({
  username: 'HiagoScierry', // set a default value
  setUsername: () => {},
});

export const useUsername = () => useContext(UserContext);
