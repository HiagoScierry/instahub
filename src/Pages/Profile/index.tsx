import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

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

const Profile: React.FC = () => {
  const [user, setUser] = useState<IGithubUser>({});
  const [repos, setRepos] = useState<IGithubRepos>([]);


  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('userInstaHub');
      console.log(user);
      const response = await Axios.get(`https://api.github.com/users/${user}`);
      setUser(response.data);
      if (response.status === 200) {
        const secondResponse = await Axios.get(response.data.repos_url);
        setRepos(secondResponse.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const openUrl = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image source={{uri: user.avatar_url}} style={styles.image} />
          <Text style={styles.userName}>{user.login}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.text}>{user.bio}</Text>
          <View style={styles.status}>
            <View style={styles.alignOneStatus}>
              <Text style={styles.textStatus}>{user.public_repos}</Text>
              <Text style={styles.textStatus}>Repo</Text>
            </View>
            <View style={styles.alignOneStatus}>
              <Text style={styles.textStatus}>{user.followers}</Text>
              <Text style={styles.textStatus}>Seguidores</Text>
            </View>
            <View style={styles.alignOneStatus}>
              <Text style={styles.textStatus}>{user.following}</Text>
              <Text style={styles.textStatus}>Seguindo</Text>
            </View>
          </View>
        </View>
      </View>
      {repos.map(
        (index: {
          html_url: string;
          id: number;
          name: string;
          description: string;
        }) => {
          return (
            <TouchableOpacity
              onPress={() => openUrl(index.html_url)}
              key={index.id}
              style={styles.containerCard}>
              <Text style={styles.titleCard}>{index.name}</Text>
              <Text style={styles.textCard}>{index.description}</Text>
            </TouchableOpacity>
          );
        },
      )}
    </ScrollView>
  );
};

export default Profile;
