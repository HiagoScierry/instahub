import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Button from '../../Components/Button';

import github from '../../Assets/github.png';

const Search: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={github} width={5} height={5} />
      <TextInput
        placeholder="Nome de usuario"
        placeholderTextColor="#212121"
        style={styles.input}
      />
      <Button onPress={() => navigation.navigate('Profile')}>
        Procurar DEV
      </Button>
    </View>
  );
};

export default Search;
