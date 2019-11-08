import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {LocalizationContext} from '../services/localization/LocalizationContext';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_LANGUAGE} from '../services/localization/translations';

export const SplashScreen = ({navigation}) => {
  const {appLanguage, setAppLanguage, translations} = useContext(
    LocalizationContext,
  );

  const setLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem('appLanguage');
    if (!currentLanguage) {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        locale => locale.languageCode,
      );
      phoneLocaleCodes.some(code => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setAppLanguage(localeCode, true);
    } else {
      setAppLanguage(currentLanguage, false);
    }
  };

  useEffect(() => {
    setLanguage();
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading...</Text>
      <Text>Language: {appLanguage}</Text>
    </View>
  );
};
