import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {LocalizationContext} from '../services/localization/LocalizationContext';

export const SplashScreen = ({navigation}) => {
  const {appLanguage, initializeAppLanguage} = useContext(LocalizationContext);

  useEffect(() => {
    initializeAppLanguage();
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, initializeAppLanguage]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading...</Text>
      <Text>Language: {appLanguage}</Text>
    </View>
  );
};
