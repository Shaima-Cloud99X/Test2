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

const BottomNavBar = () => {
  const navigation = useNavigation();

  const home = require('../../assets/images/home-21.png');
  const chart = require('../../assets/images/ChartBar.png');
  const msg = require('../../assets/images/messages-11.png');
  const user = require('../../assets/images/User1G.png');
  const plus = require('../../assets/images/PIcon.png');

  return (
    <View style={navbarStyles.navbar}>
      <View style={navbarStyles.navigationContainer}>
        <TouchableOpacity
          style={navbarStyles.nav}
          onPress={() => navigation.navigate('Home')}>
          <Image source={home} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signal')}
          style={navbarStyles.nav}>
          <Image source={chart} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={navbarStyles.nav}
          onPress={() => navigation.navigate('Messages')}>
          <Image source={msg} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
        <TouchableOpacity style={navbarStyles.nav}>
          <Image source={user} />
          <View style={navbarStyles.dot} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={plus} />
      </TouchableOpacity>
    </View>
  );
};

const navbarStyles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    alignSelf: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 40,
    height: 64,
    width: 254,
    alignItems: 'center',
    gap: 30,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  nav: {
    alignItems: 'center',
    gap: 5,
  },
  dot: {
    backgroundColor: 'rgba(35,197,98,1)',
    width: 4,
    height: 4,
    borderRadius: 50,
  },
  dot1: {
    width: 4,
    height: 4,
    borderRadius: 50,
  },
});

const Profile = () => {
  const navigation = useNavigation();

  const owner = require('../../assets/images/AccountOwner.png');
  const subscription = require('../../assets/images/subscription.png');
  const settings = require('../../assets/images/settings.png');
  const lock = require('../../assets/images/lock.png');
  const help = require('../../assets/images/help.png');
  const logout = require('../../assets/images/logoutIcon.png');
  const chevron = require('../../assets/images/chevron.png');
  const location = require('../../assets/images/noun-verified-location-1545831.png');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.profile}>
          <Image source={owner} style={styles.profileImg} />
          <View>
            <Text style={styles.profileName}>James Bond</Text>
            <Text style={styles.email}>Tomhill@gmail.com</Text>
          </View>
        </View>
        <View style={styles.options}>
          <View style={[styles.option, {alignItems: 'flex-start'}]}>
            <View
              style={{
                flexDirection: 'row',
                gap: 30,
              }}>
              <Image source={subscription} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Subscription')}>
                <Text style={styles.textStyle1}>Subscription</Text>
                <Text style={styles.textStyle2}>
                  Premium subscription active
                </Text>
              </TouchableOpacity>
            </View>
            <Image source={chevron} />
          </View>
          <View style={styles.option}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <Image source={settings} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Preferences')}>
                <Text style={styles.textStyle1}>Preferences</Text>
              </TouchableOpacity>
            </View>
            <Image source={chevron} />
          </View>
          <View style={[styles.option, {alignItems: 'flex-start'}]}>
            <View
              style={{
                flexDirection: 'row',
                gap: 30,
              }}>
              <Image source={lock} />
              <View style={{gap: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AccountSecurity')}>
                  <Text style={styles.textStyle1}>Account Security</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.filledLine} />
                  <View style={styles.line} />
                </View>
                <Text style={styles.textStyle3}>Excellent</Text>
              </View>
            </View>
            <Image source={chevron} />
          </View>
          <View style={styles.option}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <Image source={location} />
              <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                <Text style={styles.textStyle1}>Verify Location</Text>
              </TouchableOpacity>
            </View>
            <Image source={chevron} />
          </View>
          <View style={styles.option}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <Image source={help} />

              <TouchableOpacity>
                <Text style={styles.textStyle1}>Customer Support</Text>
              </TouchableOpacity>
            </View>
            <Image source={chevron} />
          </View>
          <View style={styles.option}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <Image source={logout} />
              <TouchableOpacity>
                <Text style={styles.textStyle1}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavBar />
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
    marginTop: 24,
  },
  profile: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 12,
  },
  profileImg: {
    width: 106,
    height: 112,
  },
  profileName: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 27,
    textAlign: 'center',
  },
  email: {
    color: '#E5E5E9',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
    marginTop: -10,
  },
  options: {
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    gap: 25,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },

  textStyle2: {
    color: '#A7A7AB',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },

  textStyle3: {
    color: '#A7A7AB',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  filledLine: {
    width: 156,
    height: 8,
    borderRadius: 25,
    backgroundColor: '#34A853',
  },
  line: {
    width: 60,
    height: 8,
    borderRadius: 25,
    backgroundColor: '#34A853',
    opacity: 0.3,
  },
});

export default Profile;
