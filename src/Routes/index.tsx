import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import Friends from '../Pages/Friends';
import Profile from '../Pages/Profile';
import Search from '../Pages/Search';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBarOptions={{
          activeTintColor: '#212121',
          labelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Friends"
          component={Friends}
          options={{
            tabBarLabel: 'Amigos',
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Pesquisa',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({color, size}) => (
              <Icon2 name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
