import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const image = require('../../assets/images/WelcomeImg.png');
  const button = require('../../assets/images/ArrowButton.png');

  return (
    <View style={styles.window}>
      <View style={styles.container}>
        <Image source={image} />
        <Text style={styles.textStyle}>Welcome</Text>
        <Text style={styles.textStyle1}>
          Stay on top by giving the best Crypto service to the customers
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Register')}>
          <Image source={button} />
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
  container: {
    flex: 1,
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 44,
    marginTop: '12%',
    marginLeft: '10%',
    marginBottom: '5%',
  },
  textStyle1: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginLeft: '10%',
    width: 292,
  },
  buttonStyle: {
    marginTop: '15%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },
});

export default Welcome;
