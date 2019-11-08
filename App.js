import React from 'react';
import {SafeAreaView} from 'react-native';
import AppContainer from './src/navigation/Navigator';
import {LocalizationProvider} from './src/services/localization/LocalizationContext';

const App: () => React$Node = () => {
  return (
    <LocalizationProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppContainer />
      </SafeAreaView>
    </LocalizationProvider>
  );
};

export default App;
