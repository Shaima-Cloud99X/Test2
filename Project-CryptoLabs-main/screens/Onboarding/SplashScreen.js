import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  });

  return (
    <View style={styles.window}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Crypto Labs</Text>
        <View style={styles.rectangle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#141416',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flex: 1,
    color: '#07B436',
    fontFamily: 'Poppins-Medium',
    fontSize: 57,
    textAlignVertical: 'center',
  },
  rectangle: {
    height: 21,
    backgroundColor: '#34A853',
    width: '100%',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: 'flex-end',
  },
});

export default SplashScreen;
