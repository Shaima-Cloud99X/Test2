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
import DashedLine from 'react-native-dashed-line';

const Home = () => {
  const navigation = useNavigation();

  const bell = require('../../assets/images/bellicon.png');
  const icon1 = require('../../assets/images/Image1.png');
  const icon2 = require('../../assets/images/Image2.png');
  const frame = require('../../assets/images/Frame430.png');

  const heart = require('../../assets/images/heart1.png');
  const msg = require('../../assets/images/message1.png');
  const repost = require('../../assets/images/repost.png');
  const send = require('../../assets/images/send.png');
  const img = require('../../assets/images/Group.png');
  const eye = require('../../assets/images/eye1.png');
  const export1 = require('../../assets/images/export-31.png');
  const searchIcon = require('../../assets/images/MagnifyingGlass.png');

  const [tab, setCurrentTab] = React.useState('trending');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textStyle1}>Crypto Labs</Text>
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
          <TouchableOpacity onPress={() => setCurrentTab('trending')}>
            <Text
              style={tab === 'trending' ? styles.currTab : styles.textStyle2}>
              Trending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('following')}>
            <Text
              style={tab === 'following' ? styles.currTab : styles.textStyle2}>
              Following
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('event')}>
            <Text style={tab === 'event' ? styles.currTab : styles.textStyle2}>
              Event
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{gap: 20, marginTop: 40}}>
          <View style={styles.container}>
            <Image source={icon1} />
            <View>
              <Text style={styles.textStyle3}>floyed miles</Text>
              <Text style={styles.textStyle4}>@Floydmiles</Text>
              <Text style={styles.textStyle5}>
                So how can advisors add Bitcoin exposure to client portfolios?
                Here are five routes you can take, listed from easiest to
                most...
              </Text>
              <Image source={frame} />
              <View style={styles.container1}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <TouchableOpacity>
                    <Image source={heart} />
                  </TouchableOpacity>
                  <Text style={styles.textStyle6}>23.5k</Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <TouchableOpacity>
                    <Image source={msg} />
                  </TouchableOpacity>
                  <Text style={styles.textStyle6}>3.3k</Text>
                </View>
                <TouchableOpacity>
                  <Image source={repost} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={send} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.line}>
            <DashedLine
              dashLength={5}
              dashStyle={{backgroundColor: '#333333'}}
            />
          </View>
          <View style={styles.container}>
            <Image source={icon2} />
            <View>
              <Text style={styles.textStyle3}>darlene robertson</Text>
              <Text style={styles.textStyle4}>@Darlenerobertson</Text>
              <Text style={styles.textStyle5}>
                I agree. Worth waiting till it's trading at its true valuation
                post lock ip...
              </Text>
              <View style={styles.container2}>
                <Text style={styles.textStyle7}>
                  Added SPDR Dow Jones Average Trust to Watchlist
                </Text>
                <Image source={img} />
              </View>
              <View style={styles.container1}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <TouchableOpacity>
                    <Image source={heart} />
                  </TouchableOpacity>
                  <Text style={styles.textStyle6}>23.5k</Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <TouchableOpacity>
                    <Image source={msg} />
                  </TouchableOpacity>
                  <Text style={styles.textStyle6}>3.3k</Text>
                </View>
                <TouchableOpacity>
                  <Image source={eye} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={export1} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const BottomNavBar = () => {
  const navigation = useNavigation();

  const home = require('../../assets/images/homeG.png');
  const chart = require('../../assets/images/ChartBar.png');
  const msg = require('../../assets/images/messages-11.png');
  const user = require('../../assets/images/User.png');
  const plus = require('../../assets/images/PIcon.png');

  return (
    <View style={navbarStyles.navbar}>
      <View style={navbarStyles.navigationContainer}>
        <TouchableOpacity style={navbarStyles.nav}>
          <Image source={home} />
          <View style={navbarStyles.dot} />
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={navbarStyles.nav}>
          <Image source={user} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={navbarStyles.nav}>
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
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    gap: 16,
    width: 375,
    paddingRight: 50,
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  textStyle4: {
    color: '#EEF2F6',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  textStyle5: {
    color: '#F9FBFC',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  container1: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
  textStyle6: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  line: {
    width: 375,
    alignSelf: 'center',
  },
  container2: {
    backgroundColor: '#062110',
    height: 66,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
  },
  textStyle7: {
    color: '#23C562',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    width: 211,
  },
});

export default Home;
