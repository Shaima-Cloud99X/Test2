import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TouchID = () => {
  const navigation = useNavigation();

  const Fingerprint = require('../../assets/images/Fingerprint.png');
  const Fingerprint1 = require('../../assets/images/Fingerprint1.png');

  const [btnPressed, setBtnPressed] = React.useState(false);

  //
  return (
    <View style={styles.window}>
      <Text style={styles.title}>Touch ID sensor to verify yourself</Text>
      <Text style={styles.textStyle1}>
        You can use your fingerprint to confirm login and payments through this
        app.
      </Text>
      <Image source={Fingerprint} style={styles.image} />
      <View style={styles.lastSection}>
        {btnPressed ? (
          <View style={styles.container1}>
            <Text style={styles.textStyle2}>
              Confirm Using Your Fingerprint
            </Text>
            <Text style={styles.textStyle3}>
              Please verify your identity using touch ID and it will proceed
              automatically.
            </Text>
            <Image source={Fingerprint1} style={{marginTop: 24}} />
            <Text style={styles.textStyle4}>Touch the fingerprint sensor</Text>
            <View style={{width: 316, alignSelf: 'center'}}>
              <TouchableOpacity
                style={{width: 31}}
                onPress={() => setBtnPressed(!btnPressed)}>
                <Text style={styles.textStyle5}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setBtnPressed(!btnPressed)}>
            <Text style={styles.btnText}>Sign Up By Fingers</Text>
          </TouchableOpacity>
        )}
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
    fontFamily: 'Poppins-SemiBold',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 40,
    width: 357,
    alignSelf: 'center',
  },
  textStyle1: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    width: 305,
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 60,
  },
  lastSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
    height: 67,
    borderRadius: 14,
    backgroundColor: '#34A853',
    alignItems: 'center',
    marginBottom: 30,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  container1: {
    backgroundColor: '#060606',
    borderTopStartRadius: 61,
    borderTopEndRadius: 61,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  textStyle3: {
    color: '#ACADB9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
    width: 355,
  },
  textStyle4: {
    color: '#757575',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    marginTop: 24,
  },
  textStyle5: {
    color: '#34A853',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: 48,
    alignSelf: 'flex-start',
  },
});

export default TouchID;
