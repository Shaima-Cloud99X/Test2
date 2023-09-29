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

const EditInformation = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const emailIcon = require('../../assets/images/EmailIcon.png');
  const lockIcon = require('../../assets/images/LockIcon.png');
  const userIcon = require('../../assets/images/UserIcon.png');
  const maskIcon = require('../../assets/images/MaskGroup.png');

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = name => {
    setName(name);
  };

  const handleEmailChange = email => {
    setEmail(email);
  };
  const handlePasswordChange = password => {
    setPassword(password);
  };
  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Information</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <View style={styles.inputFieldContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Image source={userIcon} />
              <TextInput
                style={styles.inputField}
                value={name}
                onChangeText={handleNameChange}
                placeholder="FULL NAME"
                placeholderTextColor="#CBCBCB"
              />
            </View>
            <Image source={maskIcon} />
          </View>
          <View style={styles.inputFieldContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Image source={emailIcon} />
              <TextInput
                style={styles.inputField}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="EMAIL"
                placeholderTextColor="#CBCBCB"
              />
            </View>
            <Image source={maskIcon} />
          </View>
          <View style={styles.inputFieldContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Image source={lockIcon} />
              <TextInput
                style={styles.inputField}
                value={password}
                onChangeText={handlePasswordChange}
                placeholder="PASSWORD"
                placeholderTextColor="#CBCBCB"
              />
            </View>
            <Image source={maskIcon} />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle1}>SAVE CHANGES</Text>
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
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    gap: 25,
  },
  inputFieldContainer: {
    backgroundColor: '#222534',
    height: 67,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
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

export default EditInformation;
