import React, {createContext, useState, useContext, useEffect} from 'react';
import Axios from 'axios';

interface IGithubUser {
  login: string;
  id: string;
  avatar_url: string;
  repos_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface IGithubRepos {
  map(
    arg0: (index: {
      html_url: string;
      id: number;
      name: string;
      description: string;
    }) => JSX.Element,
  ): React.ReactNode;
  [index: number]: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  };
}

interface IGithubFollower {
  map(
    arg0: (index: {
      id: number;
      avatar_url: string;
      login: string;
    }) => JSX.Element,
  ): React.ReactNode;
  [index: number]: {
    id: number;
    login: string;
    avatar_url: string;
  };
}

const UserContext = createContext<string>('');

export function UserProvider({children}) {
  const [user, setUser] = useState<string>('HiagoScierry');
  const [userData, setUserData] = useState<IGithubUser>({
    login: '',
    id: '',
    avatar_url: '',
    repos_url: '',
    name: '',
    bio: '',
    public_repos: 0,
    followers: 0,
    following: 0,
  });

  const [repos, setRepos] = useState<IGithubRepos>([]);

  const [friends, setFriends] = useState<IGithubFollower>([]);

  const getUserFriends = async () => {
    try {
      console.log(user);

      const response = await Axios.get(
        `https://api.github.com/users/${user}/followers`,
      );
      setFriends(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/${user}`);
      setUserData(response.data);
      if (response.status === 200) {
        const secondResponse = await Axios.get(response.data.repos_url);
        setRepos(secondResponse.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserData();
    getUserFriends();
  }, [user]);

  return (
    <UserContext.Provider value={{user, setUser, repos, userData, friends}}>
      {children}
    </UserContext.Provider>
  );
}

export function useName() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useName must be used within a UserProvider');
  const {user, setUser, repos, userData, friends} = context;
  return {user, setUser, repos, userData, friends};
}

export default UserContext;
