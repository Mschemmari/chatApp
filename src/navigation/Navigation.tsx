import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {
  HomeIcon,
  PayIcon,
  InboxIcon,
  JobsIcon,
  MoreIcon,
} from '../components/icons';

function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <HomeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Pay"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({focused}) => <PayIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({focused}) => <InboxIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({focused}) => <JobsIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({focused}) => <MoreIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
