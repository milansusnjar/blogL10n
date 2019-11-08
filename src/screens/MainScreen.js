import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from '../components/Header';
import {LocalizationContext} from '../services/localization/LocalizationContext';

export const MainScreen = ({navigation}) => {
  const {translations} = useContext(LocalizationContext);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Header text={translations.WELCOME} />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={[
          styles.sectionContainer,
          {
            position: 'absolute',
            top: 20,
            right: 20,
            marginTop: 0,
            alignSelf: 'flex-end',
            borderWidth: 1,
            borderColor: 'grey',
            paddingVertical: 10,
            backgroundColor: 'white',
          },
        ]}>
        <Text style={[styles.sectionTitle, {fontSize: 14}]}>
          {translations.CHANGE_LANGUAGE}
        </Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{translations.STEP1}</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{translations.SEE_CHANGES}</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
          </Text>
        </View>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
