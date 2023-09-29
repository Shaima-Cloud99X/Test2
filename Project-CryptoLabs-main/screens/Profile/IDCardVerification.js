import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const IDCardVerification = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const line = require('../../assets/images/Group34376.png');
  const ImageSquare = require('../../assets/images/ImageSquare.png');
  const circle = require('../../assets/images/Circle.png');
  const CameraRotate = require('../../assets/images/CameraRotate.png');
  const camera = require('../../assets/images/Group34377.png');

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>ID Card Verification</Text>
        <View style={{width: 24, height: 24}} />
      </View>
      <Image source={line} style={{alignSelf: 'center'}} />
      <Image
        source={camera}
        style={{alignSelf: 'center', marginTop: 78, marginBottom: 74}}
      />
      <Text style={styles.textStyle1}>Back of your ID</Text>
      <Text style={styles.textStyle2}>
        Hold up your ID and take a picture, Your entire ID must be in the frame.
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={ImageSquare} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={circle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={CameraRotate} />
          </TouchableOpacity>
        </View>
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
    width: 246,
    alignSelf: 'center',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 46,
    alignSelf: 'center',
  },
});

export default IDCardVerification;
