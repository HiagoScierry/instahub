import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface props {
  onPress: () => void;
  children: string;
}

const Button: React.FC<props> = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
