import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import FindScreen from '../screens/FindScreen';
import PostScreen from '../screens/PostScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/images/home.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/images/search.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/add.png')}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/images/settings.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={require('../assets/images/chat.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
