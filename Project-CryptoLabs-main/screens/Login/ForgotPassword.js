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

const ForgotPassword = () => {
  const navigation = useNavigation();

  const back = require('../../assets/images/Back.png');
  const coffeeCircles = require('../../assets/images/CoffeeCircles1.png');
  const email = require('../../assets/images/Email.png');
  const phone = require('../../assets/images/Phone1.png');

  const [option, setOption] = React.useState(0);

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('Login')}>
            <Image source={back} />
          </TouchableOpacity>
          <Image source={coffeeCircles} style={{marginTop: -20}} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle1}>Forget Password</Text>
          <Text style={styles.textStyle2}>
            Select which contact details should we use to reset your password
          </Text>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.card} onPress={() => setOption(1)}>
              <Image source={email} />
              <View>
                <Text style={styles.textStyle3}>Email</Text>
                <Text style={styles.textStyle4}>Code send to your email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => setOption(2)}>
              <Image source={phone} />
              <View>
                <Text style={styles.textStyle3}>Mobile Number</Text>
                <Text style={styles.textStyle4}>
                  Code send to your mobile number
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('VerifyEmail')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// onPress={() => {
//   if (option === 1) {
//     navigation.navigate('VerifyEmail');
//   }
// }}

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
  container: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    marginTop: -5,
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
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
  container2: {
    gap: 25,
    marginTop: 35,
    marginBottom: 44,
  },
  card: {
    height: 80,
    borderRadius: 10,
    backgroundColor: '#23262F',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    gap: 20,
  },
  selectedCard: {
    height: 80,
    borderRadius: 10,
    backgroundColor: '#23262F',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    gap: 20,
    borderWidth: 2,
    borderColor: '#455AF7',
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  textStyle4: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default ForgotPassword;
