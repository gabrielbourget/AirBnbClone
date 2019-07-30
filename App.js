import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './Screens/Explore/Explore'
import Saved from './Screens/Saved/Saved'
import Trips from './Screens/Trips/Trips'
import Inbox from './Screens/Inbox/Inbox'
import Profile from './Screens/Profile/Profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      topBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon  
          name='ios-search'
          color={ tintColor }
          size={ 24 }
        />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      topBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon  
          name='ios-heart'
          color={ tintColor }
          size={ 24 }
        />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      topBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ require('./assets/airbnb.png')}
          color={ tintColor }
          style={
            { height: 24, width: 24, tintColor }
          }
        />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      topBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon  
          name='ios-chatboxes'
          color={ tintColor }
          size={ 24 }
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      topBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon  
          name='ios-person'
          color={ tintColor }
          size={ 24 }
        />
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey'
  },
  style: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5
  }
});