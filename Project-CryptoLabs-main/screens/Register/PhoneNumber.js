// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import React, { useState, useEffect } from 'react';

import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const PhoneNumber = () => {
  const navigation = useNavigation();

  const back = require('../../assets/images/Back.png');
  const coffeeCircles = require('../../assets/images/CoffeeCircles1.png');
  const userIcon = require('../../assets/images/Phone.png');
  const userIcon1 = require('../../assets/images/PhoneG.png');

  const [number, setNumber] = React.useState('');

  const handleNumberChange = number => {
    setNumber(number);
  };

  // const [referenceNo, setReferenceNo] = useState('');

  const requestOTP = async () => {
    try {
      const response = await axios.post(
        'https://api.mspace.lk/otp/request', // Replace with your server's URL
        {
          applicationId: 'APP_008054',
          password: '6b228011f46537a92d11e03fa4c9fa04',
          subscriberId: `tel:94719087869`,
          applicationHash: 'abcdefgh',
          applicationMetaData: {
            client: 'MOBILEAPP',
            device: 'HUAWEI nova 7 SE',
            os: 'android 10',
            appCode: 'https://play.google.com/store/apps/details?id=lk',
          },
        }
      );

      
      console.log('API Response:', response);


      
      // Handle the response from the server, which should include OTP generation details
      if (response.data && response.data.statusCode === 'S1000') {
        // setReferenceNo(response.data.referenceNo);
        navigation.navigate('Verification', { referenceNo: response.data.referenceNo }); // Redirect to OTP verification screen
      } else {
        Alert.alert('Error', 'Failed to request OTP.');
      }
    } catch (error) {
      // console.error('Error requesting OTP:', error);
      // Alert.alert('Error', 'Failed to request OTP.');
      if (error.response) {
    // The request was made, but the server responded with an error status code
    console.error('Server Error:', error.response.status);
    console.error('Response Data:', error.response.data);
  } else if (error.request) {
    // The request was made, but there was no response from the server
    console.error('No Response from Server');
  } else {
    // Something else happened while setting up the request
    console.error('Error:', error.message);
  }
  Alert.alert('Error', 'Failed to request OTP.');
    }
  };

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('Register')}>
            <Image source={back} />
          </TouchableOpacity>
          <Image source={coffeeCircles} style={{marginTop: -20}} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle1}>Enter Your Phone Number</Text>
          <View style={{gap: 20}}>
            <View
              style={number ? styles.filledInput : styles.inputFieldContainer}>
              {number ? (
                <Image source={userIcon1} />
              ) : (
                <Image source={userIcon} />
              )}
              <TextInput
                style={styles.inputField}
                value={number}
                onChangeText={handleNumberChange}
                placeholder="Phone Number"
                placeholderTextColor="#C2C3CB"
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Verification')}
             // onPress={requestOTP}
              >
              <Text style={styles.buttonText}>Verification</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Verification')}
                style={[styles.buttonStyle, { backgroundColor: '#23262F' }]}
                                                                            >
              <Text style={[styles.buttonText, { color: '#C2C3CB' }]}>Later</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#141416',
  },
  backIcon: {
    width: 45,
    height: 45,
    marginTop: '7%',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    gap: 41,
  },
  inputFieldContainer: {
    backgroundColor: '#23262F',
    height: 65,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    gap: 22,
  },
  filledInput: {
    backgroundColor: '#23262F',
    height: 65,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    gap: 22,
    borderWidth: 2,
    borderColor: '#34A853',
  },
  inputField: {
    width: 300,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#C2C3CB',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    marginTop: -5,
  },
  buttonStyle: {
    height: 65,
    backgroundColor: '#34A853',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
});

export default PhoneNumber;
