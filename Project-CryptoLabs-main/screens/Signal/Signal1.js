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
const Signal1 = () => {
  const navigation = useNavigation();

  const bell = require('../../assets/images/bellicon.png');
  const searchIcon = require('../../assets/images/MagnifyingGlass.png');
  const Bitcoin = require('../../assets/images/Bitcoin.png');
  const arrow = require('../../assets/images/arrow-down-1.png');
  const img = require('../../assets/images/Group453.png');

  //
  const [tab, setCurrentTab] = React.useState('Top');

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
        <View style={styles.container}>
          <Image source={Bitcoin} />
          <View>
            <Text style={styles.textStyle1}>Bitcoin</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text style={styles.price}>$56,198</Text>
              <View style={styles.container1}>
                <Image source={arrow} />
                <Text style={styles.textStyle2}>-1.43%</Text>
              </View>
            </View>
          </View>
        </View>
        <Image source={img} style={{alignSelf: 'center'}} />
        <View style={styles.container2}>
          <View style={styles.segment}>
            <TouchableOpacity onPress={() => setCurrentTab('Top')}>
              <Text style={tab === 'Top' ? styles.currTab : styles.tab}>
                Top
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab('Invest')}>
              <Text style={tab === 'Invest' ? styles.currTab : styles.tab}>
                Invest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab('Events')}>
              <Text style={tab === 'Events' ? styles.currTab : styles.tab}>
                Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab('Market')}>
              <Text style={tab === 'Market' ? styles.currTab : styles.tab}>
                Market
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textStyle3}>BTC Price Live Data</Text>
            <Text style={styles.textStyle4}>
              The live Bitcoin price today is $56.409,17 USD with a 24-hour
              trading volume of $32.393.371.349 USD. We update our BTC to USD
              price in real-time.
            </Text>
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
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    gap: 20,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle1: {
    color: '#F4F6F9',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  price: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  container1: {
    width: 75,
    height: 26,
    borderRadius: 8,
    backgroundColor: '#FF1843',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  container2: {
    backgroundColor: '#212121',
    borderTopStartRadius: 61,
    borderTopEndRadius: 61,
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
    marginTop: 30,
    paddingBottom: 30,
  },
  segment: {
    marginTop: 30,
    flexDirection: 'row',
    borderRadius: 32,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  currTab: {
    height: 40,
    width: 75,
    backgroundColor: '#F9FBFC',
    borderRadius: 34,
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    borderColor: '#646464',
    borderWidth: 2,
  },
  tab: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    width: 75,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: '#646464',
    borderWidth: 2,
    borderRadius: 34,
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  textStyle4: {
    color: '#F9FBFC',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 335,
  },
});

export default Signal1;
