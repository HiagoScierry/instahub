/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Axios from 'axios';
import {useName} from '../../Context/user';

import styles from './styles';

const Friends: React.FC = () => {
  const {friends} = useName();

  


  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
      }}
      contentContainerStyle={styles.container}>
      {friends.map((index: {id: number; avatar_url: string; login: string}) => (
        <View key={index.id} style={styles.areaCard}>
          <View style={styles.headerCard}>
            <Image style={styles.smallImage} source={{uri: index.avatar_url}} />
            <Text style={styles.headerTitle}>{index.login}</Text>
          </View>
          <View style={styles.content}>
            <Image
              style={styles.biggestImage}
              source={{uri: index.avatar_url}}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Friends;
