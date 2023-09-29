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

const VerifiedScreen = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const ImageSquare = require('../../assets/images/verified.png');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: 24, height: 24, marginLeft: 24, marginTop: 30}}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>You're Verified</Text>

        <Image
          source={ImageSquare}
          style={{alignSelf: 'center', marginTop: 78, marginBottom: 74}}
        />
        <Text style={styles.textStyle2}>
          Now you can access all features of crypto labs.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Start</Text>
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
    textAlign: 'center',
    marginTop: 40,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 27,
    textAlign: 'center',
  },
  textStyle2: {
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },

  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 27,
  },
  button: {
    marginTop: 90,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
    height: 67,
    borderRadius: 14,
    backgroundColor: '#34A853',
    alignItems: 'center',
    width: 344,
    alignSelf: 'center',
  },
});

export default VerifiedScreen;
