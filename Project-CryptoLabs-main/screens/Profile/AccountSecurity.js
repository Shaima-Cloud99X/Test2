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

const AccountSecurity = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const card = require('../../assets/images/Card.png');
  const maskIcon = require('../../assets/images/CaretLeft1.png');
  const passport = require('../../assets/images/passport.png');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.title}>Select Your ID Type</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <Text style={styles.textStyle3}>We-II take 2 pictures of your ID.</Text>
        <Text style={styles.textStyle3}>
          What type of ID do you want to use?
        </Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.inputFieldContainer}
            onPress={() => navigation.navigate('IDCardVerification')}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={card} />
              <Text style={styles.textStyle2}>ID Card</Text>
            </View>
            <Image source={maskIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputFieldContainer}
            onPress={() => navigation.navigate('FaceID')}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={card} />
              <Text style={styles.textStyle2}>Face ID</Text>
            </View>
            <Image source={maskIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputFieldContainer}
            onPress={() => navigation.navigate('TouchID')}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={card} />
              <Text style={styles.textStyle2}>Touch ID</Text>
            </View>
            <Image source={maskIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputFieldContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={card} />
              <Text style={styles.textStyle2}>Driver's License</Text>
            </View>
            <Image source={maskIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputFieldContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <Image source={passport} />
              <Text style={styles.textStyle2}>Passport</Text>
            </View>
            <Image source={maskIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle4}>
          Your photo ID and actions captured during the ID verification process
          may constitute biometric data. Please see our Privacy Policy for more
          information about how we store and use your biometric data
        </Text>
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
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    gap: 25,
  },
  inputFieldContainer: {
    backgroundColor: '#23262F',
    height: 80,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  inputField: {
    width: 250,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#CBCBCB',
    paddingTop: 13,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  textStyle3: {
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    width: 323,
    textAlign: 'center',
    alignSelf: 'center',
  },
  textStyle4: {
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    textAlign: 'left',
    marginTop: 40,
  },
  button: {
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
    height: 67,
    borderRadius: 14,
    backgroundColor: '#34A853',
    alignItems: 'center',
  },
});

export default AccountSecurity;
