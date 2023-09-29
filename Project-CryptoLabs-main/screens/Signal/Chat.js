import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();

  const home = require('../../assets/images/home-21.png');
  const chart = require('../../assets/images/ChartBarG.png');
  const msg = require('../../assets/images/messages-11.png');
  const user = require('../../assets/images/User.png');
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
        <TouchableOpacity style={navbarStyles.nav}>
          <Image source={chart} />
          <View style={navbarStyles.dot} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={msg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={navbarStyles.nav}>
          <Image source={user} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={navbarStyles.nav}>
        <Image source={plus} />
        <View style={navbarStyles.dot1} />
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

//
const Chat = () => {
  const navigation = useNavigation();

  const bell = require('../../assets/images/bellicon.png');
  const searchIcon = require('../../assets/images/MagnifyingGlass.png');
  const img = require('../../assets/images/Image.png');
  const line = require('../../assets/images/line.png');
  const arrow = require('../../assets/images/arrow-right1.png');
  const img1 = require('../../assets/images/image24.png');

  //
  const [tab, setCurrentTab] = React.useState('Messenges');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textStyle1}>Signal</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity>
              <Image source={searchIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={bell} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.segment}>
          <TouchableOpacity onPress={() => setCurrentTab('Messenges')}>
            <Text
              style={tab === 'Messenges' ? styles.currTab : styles.textStyle2}>
              Messenges
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('VIP')}>
            <Text style={tab === 'VIP' ? styles.currTab : styles.textStyle2}>
              VIP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('notification')}>
            <Text
              style={
                tab === 'notification' ? styles.currTab : styles.textStyle2
              }>
              Notification
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>12th July 2023</Text>
        <View style={styles.container}>
          <View style={styles.msgSection}>
            <View style={styles.dateSection}>
              <Text style={styles.date1}>Tue</Text>
              <View style={styles.circle}>
                <Text style={styles.date2}>13</Text>
              </View>
            </View>
            <View style={styles.msgDescription}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: 225}}>
                  <View style={{marginBottom: 12}}>
                    <Text
                      style={[styles.text, {textDecorationLine: 'underline'}]}>
                      Todays calls
                    </Text>
                  </View>
                  <View style={{marginBottom: 12}}>
                    <Text
                      style={[styles.text, {textDecorationLine: 'underline'}]}>
                      Longs
                    </Text>
                    <Text style={styles.text}>LINK +7.6%</Text>
                    <Text style={styles.text}>NEAR +30.7%</Text>
                    <Text style={styles.text}>BNB +11%</Text>
                    <Text style={styles.text}>HIFI +39.6%</Text>
                    <Text style={styles.text}>LDO +4%</Text>
                    <Text style={styles.text}>PAPPLE +52%</Text>
                  </View>

                  <Text style={styles.text}>
                    BNB / BCH Short closed in small losses -11% BWAPPLE - Dex
                    loss
                  </Text>
                </View>
                <Image source={img} />
              </View>
              <Image source={line} style={styles.line} />
              <View style={styles.showAllSection}>
                <Text style={styles.showAll}>Show All</Text>
                <Image source={arrow} />
              </View>
            </View>
          </View>
          <View style={styles.msgSection}>
            <View style={styles.dateSection}>
              <Text style={styles.date1}>Mon</Text>
              <View style={styles.circle}>
                <Text style={styles.date2}>12</Text>
              </View>
            </View>
            <View style={styles.msgDescription}>
              <View
                style={{
                  width: 225,
                  height: 200,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle3}>
                  Weekly round up 10th - 15th September
                </Text>
                <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                  Risk Management 101
                </Text>
                <View>
                  <Text style={styles.textStyle3}>Know Your Limits</Text>
                  <Text style={styles.text}>
                    Don't start a trade without knowing how much you're okay
                    with losing. This number helps you set your 'Stop Loss' and
                    keeps you from freaking out.
                  </Text>
                </View>
              </View>
              <Image source={line} style={styles.line} />
              <Image source={img1} />
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
  header: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },
  segment: {
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 32,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  currTab: {
    height: 40,
    width: 109,
    backgroundColor: '#F9FBFC',
    borderRadius: 28,
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    width: 109,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    gap: 28,
    marginBottom: 30,
  },
  date: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 15,
  },
  msgSection: {
    flexDirection: 'row',
    gap: 30,
  },
  dateSection: {
    alignItems: 'center',
    gap: 10,
  },
  date1: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#34A853',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date2: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  msgDescription: {
    backgroundColor: '#333333',
    width: Dimensions.get('screen').width - 120,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
  },
  text: {
    color: '#F9FBFC',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  line: {
    marginTop: 12,
    marginBottom: 12,
  },
  showAllSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showAll: {
    color: '#23C562',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textStyle3: {
    color: '#F9FBFC',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
});

export default Chat;
