import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Verification = () => {
  const navigation = useNavigation();

  const back = require('../../assets/images/Back.png');
  const coffeeCircles = require('../../assets/images/CoffeeCircles1.png');

  const [otp1, setOtp1] = React.useState('');
  const [otp2, setOtp2] = React.useState('');
  const [otp3, setOtp3] = React.useState('');
  const [otp4, setOtp4] = React.useState('');

  const handleOTP1Change = number => {
    setOtp1(number);
  };
  const handleOTP2Change = number => {
    setOtp2(number);
  };
  const handleOTP3Change = number => {
    setOtp3(number);
  };
  const handleOTP4Change = number => {
    setOtp4(number);
  };

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('PhoneNumber')}>
            <Image source={back} />
          </TouchableOpacity>
          <Image source={coffeeCircles} style={{marginTop: -20}} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle1}>Verify Phone Number</Text>
          <Text style={styles.textStyle2}>
            We Have Sent Code To Your Phone Number
          </Text>
          <Text style={styles.textStyle3}>+00 000000 0000</Text>
          <View>
            <View style={styles.inputFieldContainer}>
              <TextInput
                keyboardType="numeric"
                style={otp1 ? styles.filledInput : styles.inputField}
                value={otp1}
                onChangeText={handleOTP1Change}
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                style={otp2 ? styles.filledInput : styles.inputField}
                value={otp2}
                onChangeText={handleOTP2Change}
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                style={otp3 ? styles.filledInput : styles.inputField}
                value={otp3}
                onChangeText={handleOTP3Change}
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                style={otp4 ? styles.filledInput : styles.inputField}
                value={otp4}
                onChangeText={handleOTP4Change}
                maxLength={1}
              />
            </View>
            {otp1 && otp2 && otp3 && otp4 ? (
              <Text style={[styles.textStyle3, {marginTop: -35}]}>(4:30)</Text>
            ) : (
              ''
            )}
          </View>
          <View style={{gap: 12}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('CongratsScreen')}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonStyle, {backgroundColor: '#23262F'}]}>
              <Text style={[styles.buttonText, {color: '#C2C3CB'}]}>
                Send Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
//131B15 151817
const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#131A15',
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
    backgroundColor: '#141416',
    height: 502,
    borderRadius: 35,
    alignItems: 'center',
  },
  inputFieldContainer: {
    flexDirection: 'row',
    gap: 18,
    marginBottom: 45,
  },
  filledInput: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#34A853',
    borderRadius: 13,
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  inputField: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#C2C3CB',
    borderRadius: 13,
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: 30,
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 40,
  },
  textStyle3: {
    color: '#ACADB9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginBottom: 30,
  },
  buttonStyle: {
    width: 300,
    height: 66,
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

export default Verification;
