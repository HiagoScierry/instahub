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
import {useName} from '../../Context/user';

import styles from './styles';

const Profile: React.FC = () => {
  const {userData, repos} = useName();

  const openUrl = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image source={{uri: userData.avatar_url}} style={styles.image} />
          <Text style={styles.userName}>{userData.login}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{userData.name}</Text>
          <Text style={styles.text}>{userData.bio}</Text>
          <View style={styles.status}>
            <View style={styles.alignOneStatus}>
              <Text style={styles.textStatus}>{userData.public_repos}</Text>
              <Text style={styles.textStatus}>Repo</Text>
            </View>
            <View style={styles.alignOneStatus}>
              <Text style={styles.textStatus}>{userData.followers}</Text>
              <Text style={styles.textStatus}>Seguidores</Text>
            </View>
            <View style={styles.alignOneStatus}>
              <Text style={styles.textStatus}>{userData.following}</Text>
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
