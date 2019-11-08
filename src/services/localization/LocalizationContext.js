import React, {createContext, useState} from 'react';
import translations, {DEFAULT_LANGUAGE} from './translations';
import AsyncStorage from '@react-native-community/async-storage';

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
});

export const LocalizationProvider = ({children}) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (language, shouldPersist) => {
    translations.setLanguage(language);
    setAppLanguage(language);
    if (shouldPersist) {
      AsyncStorage.setItem('appLanguage', language);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
