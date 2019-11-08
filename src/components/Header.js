import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

// this component is copied from react-native/Libraries/NewAppScreen
// and added an option to localize text with value from props

const Header = ({text}) => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>{text}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
