import LocalizedStrings from 'react-native-localization';

export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    WELCOME: 'Welcome to React',
    STEP1: 'Step One',
    SEE_CHANGES: 'See Your Changes',
    CHANGE_LANGUAGE: 'Change Language',
    LANGUAGE_SETTINGS: 'Change Language',
    BACK: 'Back',
  },
  de: {
    WELCOME: 'Willkommen bei React',
    STEP1: '1. Schritt',
    SEE_CHANGES: 'Änderungen ansehen',
    CHANGE_LANGUAGE: 'Sprache wechseln',
    LANGUAGE_SETTINGS: 'Sprache wechseln',
    BACK: 'Zurück',
  },
};

export default new LocalizedStrings(translations);
