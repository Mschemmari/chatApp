import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const HomeIcon = ({focused}: any) => (
  <Image
    source={require('../static/images/home.png')}
    style={focused ? [styles.focused, styles.iconStyle] : styles.iconStyle}
  />
);

export const PayIcon = ({focused}: any) => (
  <Image
    source={require('../static/images/pay.png')}
    style={focused ? [styles.focused, styles.iconStyle] : styles.iconStyle}
  />
);
export const InboxIcon = ({focused}: any) => (
  <Image
    source={require('../static/images/inbox.png')}
    style={focused ? [styles.focused, styles.iconStyle] : styles.iconStyle}
  />
);

export const JobsIcon = ({focused}: any) => (
  <Image
    source={require('../static/images/jobs.png')}
    style={focused ? [styles.focused, styles.iconStyle] : styles.iconStyle}
  />
);

export const MoreIcon = ({focused}: any) => (
  <Image
    source={require('../static/images/more.png')}
    style={focused ? [styles.focused, styles.iconStyle] : styles.iconStyle}
  />
);

const styles = StyleSheet.create({
  iconStyle: {
    width: 27,
    height: 27,
    // tintColor: 'grey',
  },
  focused: {
    tintColor: 'black',
  },
});
