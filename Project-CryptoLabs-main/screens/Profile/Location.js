import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Location = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const location = require('../../assets/images/subway_location-3.png');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.title}>Verify Location</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle2}>
            Turn on location service on your device settings to improve
            experience and discover community nearby
          </Text>
          <Image source={location} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle1}>Turn On Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 78, alignSelf: 'center'}}>
          <Text style={styles.textStyle3}>Not Now</Text>
        </TouchableOpacity>
      </ScrollView>
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
    fontFamily: 'Poppins-Medium',
    fontSize: 27,
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  container: {
    marginLeft: 24,
    marginRight: 24,
    gap: 60,
    alignItems: 'center',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 305,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 80,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
    height: 67,
    borderRadius: 14,
    backgroundColor: '#34A853',
    alignItems: 'center',
  },
  textStyle3: {
    textDecorationLine: 'underline',
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Location;
