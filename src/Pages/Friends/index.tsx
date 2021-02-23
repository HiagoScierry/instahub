/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Axios from 'axios';

import styles from './styles';

interface IGithubFollower {
  [index: number]: {
    id: number;
    login: string;
    avatar_url: string;
  };
}


const Friends: React.FC = () => {
  const [friends, setFriends] = useState<IGithubFollower>([]);

  const getUserFriends = async () => {
    try {
      const response = await Axios.get(
        'https://api.github.com/users/HiagoScierry/followers',
      );
      setFriends(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserFriends();
  }, []);

  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
      }}
      contentContainerStyle={styles.container}>
      {friends.map((index) => {
        return (
          <View key={index.id} style={styles.areaCard}>
            <View style={styles.headerCard}>
              <Image
                style={styles.smallImage}
                source={{uri: index.avatar_url}}
              />
              <Text style={styles.headerTitle}>{index.login}</Text>
            </View>
            <View style={styles.content}>
              <Image
                style={styles.biggestImage}
                source={{uri: index.avatar_url}}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Friends;
