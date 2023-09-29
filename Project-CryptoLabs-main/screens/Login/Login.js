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

const Login = () => {
  const navigation = useNavigation();

  const back = require('../../assets/images/Back.png');
  const coffeeCircles = require('../../assets/images/CoffeeCircles.png');
  const emailIcon = require('../../assets/images/EmailIcon.png');
  const lockIcon = require('../../assets/images/LockIcon.png');
  const eyeOffIcon = require('../../assets/images/EyeOffIcon.png');
  const google = require('../../assets/images/Google.png');
  const apple = require('../../assets/images/Apple.png');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(false);

  const handleEmailChange = email => {
    setEmail(email);
  };
  const handlePasswordChange = password => {
    setPassword(password);
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
          <Text style={styles.textStyle1}>Login Your Account</Text>
          <View style={{gap: 20}}>
            <View style={styles.inputFieldContainer}>
              <Image source={emailIcon} />
              <TextInput
                style={styles.inputField}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter Your Email"
                placeholderTextColor="#C2C3CB"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <Image source={lockIcon} />
              <TextInput
                style={[styles.inputField, {width: 255}]}
                value={password}
                onChangeText={handlePasswordChange}
                placeholder="Password"
                placeholderTextColor="#C2C3CB"
                secureTextEntry={!eye}
              />
              <TouchableOpacity onPress={() => setEye(!eye)}>
                <Image source={eyeOffIcon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginBottom: 20}}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgetPassword}>Forget Password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={{alignSelf: 'center', flexDirection: 'row', gap: 5}}>
              <Text style={[styles.buttonText, {color: '#ACADB9'}]}>
                Create New Account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={[styles.buttonText, {color: '#34A853'}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.socialMedia}>
          <Text
            style={[styles.buttonText, {color: '#ACADB9', marginBottom: '5%'}]}>
            Continue With Accounts
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={google} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={apple} />
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
    alignSelf: 'center',
    gap: 40,
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
    width: 344,
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
    paddingTop: 13,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    marginTop: -35,
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
  line: {
    backgroundColor: '#C2C3CB',
    height: 1,
    width: '100%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  socialMedia: {
    height: 105,
    alignItems: 'center',
    marginBottom: '10%',
  },
  socialButton: {
    width: 167,
    height: 61,
    backgroundColor: 'rgba(52, 168, 83, 0.3)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetPassword: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#9D9CB1',
  },
});

export default Login;
