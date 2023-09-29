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
import LinearGradient from 'react-native-linear-gradient';

const Subscription = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const premium = require('../../assets/images/premium.png');
  const arrow = require('../../assets/images/CaretRight.png');
  const alarm = require('../../assets/images/Alarm.png');
  const calendar = require('../../assets/images/solar_calendar-linear.png');
  const billing = require('../../assets/images/Scroll.png');
  const creditcard = require('../../assets/images/credit-card.png');
  const close = require('../../assets/images/close2.png');

  return (
    <View style={styles.window}>
      <LinearGradient
        colors={['rgba(24,71,51,1)', 'rgba(29,31,30,0.7)']} // An array of gradient colors
        start={{x: 0, y: 0}} // Start point (horizontal start)
        end={{x: 1, y: 0}} // End point (horizontal end)
        style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.title}>Subscription</Text>
            <View style={{width: 24, height: 24}} />
          </View>
          <View style={styles.container}>
            <Image source={premium} />
            <Text style={[styles.textStyle1, {marginTop: 20}]}>
              Premium Subscription
            </Text>
            <Text style={styles.textStyle2}>LKR 1950/MO</Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginBottom: 20,
              }}>
              <Text style={styles.textStyle3}>Change subscription plan</Text>
              <Image source={arrow} />
            </TouchableOpacity>
          </View>
          <View style={styles.container1}>
            <Text style={styles.textStyle4}>subscription details</Text>
            <View style={{gap: 5, marginBottom: 20}}>
              <View style={styles.container2}>
                <Image source={alarm} />
                <Text style={styles.textStyle5}>Payment due on</Text>
                <Text style={styles.textStyle6}>Aug 14,2023</Text>
              </View>
              <View style={styles.container2}>
                <Image source={calendar} />
                <Text style={styles.textStyle5}>Ends on</Text>
                <Text style={styles.textStyle6}>Aug 14,2023</Text>
              </View>
              <View style={styles.container2}>
                <Image source={billing} />
                <Text style={styles.textStyle5}>Billed</Text>
                <Text style={styles.textStyle6}>Monthly</Text>
              </View>
            </View>
            <Text style={styles.textStyle4}>payment method</Text>
            <View style={{gap: 5, marginBottom: 20}}>
              <View
                style={[styles.container2, {justifyContent: 'space-between'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={creditcard} />
                  <Text style={styles.textStyle5}>Axis card</Text>
                </View>
                <Text style={styles.textStyle6}>xxxx xxxx 0101</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Image source={close} />
              <Text style={styles.btnText}>Cancel Subscription</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
    //
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle1: {
    color: '#EDE9E9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  textStyle2: {
    color: '#989E99',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  textStyle3: {
    color: '#EDE9E9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    textDecorationLine: 'underline',
  },
  container1: {
    backgroundColor: '#141416',
    borderTopStartRadius: 61,
    borderTopEndRadius: 61,
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
  },
  textStyle4: {
    color: '#EDE9E9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  container2: {
    backgroundColor: '#2B2C2E',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle5: {
    color: '#EDE9E9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    paddingLeft: 20,
  },
  textStyle6: {
    color: '#E4F7FF',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  btn: {
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgba(70,53,53,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 25,
  },
  btnText: {
    color: '#D22626',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});

export default Subscription;
