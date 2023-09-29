import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CongratsScreen = () => {
  const navigation = useNavigation();

  const done = require('../../assets/images/Done.png');

  return (
    <View style={styles.window}>
      <Image source={done} style={{alignSelf: 'center', marginTop: 100}} />
      <Text style={styles.title}>Congrats!</Text>
      <Text style={styles.textStyle2}>Account Ceated Succesfully</Text>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#141416',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 20,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 27,
    textAlign: 'center',
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: 228,
  },

  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  button: {
    marginTop: 90,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#34A853',
    alignItems: 'center',
    width: 185,
    alignSelf: 'center',
  },
});

export default CongratsScreen;
