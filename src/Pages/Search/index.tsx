import React, {useState} from 'react';
import {View, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useName} from '../../Context/user';

import styles from './styles';

import Button from '../../Components/Button';

import github from '../../Assets/github.png';

const Search: React.FC = () => {
  const user = useName();
  const navigation = useNavigation();

  const [username, setUserName] = useState<string>('');

  const setProfile = async () => {
    try {
      user.setUser(username);
      navigation.navigate('Profile');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={github} width={5} height={5} />
      <TextInput
        placeholder="Nome de usuario"
        placeholderTextColor="#212121"
        style={styles.input}
        value={username}
        onChangeText={(e) => setUserName(e)}
      />
      <Button onPress={() => setProfile()}>Procurar DEV</Button>
    </View>
  );
};

export default Search;
