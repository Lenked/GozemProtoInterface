import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import TopAppBar from '../../components/TopAppBar';
import HomePrincipal from './home/home-principal';

const Tab = createBottomTabNavigator();

const Home = () => (
  <HomePrincipal />
);

const Aide = () => (
  <View>
    <Text>Aide</Text>
  </View>
);
const Adresses = () => (
  <View>
    <Text>Adresses</Text>
  </View>
);
const Activités = () => (
  <View>
    <Text>Activités</Text>
  </View>
);
const Compte = () => (
  <View>
    <Text>Compte</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <TopAppBar />
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#169137'
            }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Aide"
            component={Aide}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="help" size={size} color={color} />
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Adresses"
            component={Adresses}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="location-on" size={size} color={color} />
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Activités"
            component={Activités}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="directions-run" size={size} color={color} />
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Compte"
            component={Compte}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="account-circle" size={size} color={color} />
              ),
              headerShown: false
            }}
          />
        </Tab.Navigator>
    </View>
  );
}
