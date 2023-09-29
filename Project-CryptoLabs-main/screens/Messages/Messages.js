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

//
const Messages = () => {
  const navigation = useNavigation();

  const icon = require('../../assets/images/MaskGroup1.png');
  const searchIcon = require('../../assets/images/Search.png');
  const Filter = require('../../assets/images/Filter.png');
  const userImg1 = require('../../assets/images/Ellipse18.png');
  const userImg2 = require('../../assets/images/Ellipse19.png');
  const userImg3 = require('../../assets/images/Ellipse20.png');
  const userImg4 = require('../../assets/images/Ellipse21.png');
  const userImg5 = require('../../assets/images/Ellipse22.png');
  const userImg6 = require('../../assets/images/Ellipse23.png');
  const crypto1 = require('../../assets/images/crypto1.png');
  const crypto2 = require('../../assets/images/crypto2.png');
  const crypto3 = require('../../assets/images/crypto3.png');
  const crypto4 = require('../../assets/images/crypto4.png');
  const group1 = require('../../assets/images/group1.png');
  const group2 = require('../../assets/images/group2.png');
  const group3 = require('../../assets/images/group3.png');
  const group4 = require('../../assets/images/group4.png');

  //
  const [tab, setCurrentTab] = React.useState('Primary');
  const [search, setSearch] = React.useState('');

  const handleSearch = text => {
    setSearch(text);
  };

  const renderChat = () => {
    if (tab === 'Primary') {
      return (
        <>
          <View style={styles.todaySection}>
            <Text style={styles.textStyle2}>Today</Text>
            <TouchableOpacity style={styles.msgContainer}>
              <View style={styles.msgContainer1}>
                <Image source={userImg1} style={styles.profilePic} />
                <View>
                  <Text style={styles.textStyle3}>Reny Lewis</Text>
                  <Text style={styles.textStyle4}>
                    Please confirm the friendship...
                  </Text>
                </View>
              </View>
              <View style={styles.msgNumberContainer}>
                <Text style={styles.textStyle5}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.msgContainer}
              onPress={() => navigation.navigate('Messages1')}>
              <View style={styles.msgContainer1}>
                <Image source={userImg2} style={styles.profilePic} />
                <View>
                  <Text style={styles.textStyle3}>Jessica Jones</Text>
                  <Text style={styles.textStyle4}>I’m On Vocation Ron...</Text>
                </View>
              </View>
              <View style={styles.msgNumberContainer}>
                <Text style={styles.textStyle5}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.yesterdaySection}>
            <Text style={styles.textStyle2}>Yesterday</Text>
            <TouchableOpacity style={styles.msgContainer}>
              <View style={styles.msgContainer1}>
                <Image source={userImg3} style={styles.profilePic} />
                <View>
                  <Text style={styles.textStyle3}>Alexender Walker</Text>
                  <Text style={styles.textStyle4}>
                    I’ve Gone Through The Procedure ...
                  </Text>
                </View>
              </View>
              {/* <View style={styles.msgNumberContainer}>
              <Text style={styles.textStyle5}>5</Text>
            </View> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.msgContainer}>
              <View style={styles.msgContainer1}>
                <Image source={userImg4} style={styles.profilePic} />
                <View>
                  <Text style={styles.textStyle3}>Realbung Khar</Text>
                  <Text style={styles.textStyle4}>
                    How are you, friend? long time...
                  </Text>
                </View>
              </View>
              {/* <View style={styles.msgNumberContainer}>
              <Text style={styles.textStyle5}>1</Text>
            </View> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.msgContainer}>
              <View style={styles.msgContainer1}>
                <Image source={userImg5} style={styles.profilePic} />
                <View>
                  <Text style={styles.textStyle3}>Anjelina Rumour</Text>
                  <Text style={styles.textStyle4}>
                    I have a job as a foreman...
                  </Text>
                </View>
              </View>
              {/* <View style={styles.msgNumberContainer}>
              <Text style={styles.textStyle5}>1</Text>
            </View> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.msgContainer}>
              <View style={styles.msgContainer1}>
                <Image source={userImg6} style={styles.profilePic} />
                <View>
                  <Text style={styles.textStyle3}>Terris Ronad</Text>
                  <Text style={styles.textStyle4}>
                    Where are you going at night...
                  </Text>
                </View>
              </View>
              {/* <View style={styles.msgNumberContainer}>
              <Text style={styles.textStyle5}>1</Text>
            </View> */}
            </TouchableOpacity>
          </View>
        </>
      );
    } else if (tab === 'Groups') {
      return (
        <>
          <View style={styles.groupChat}>
            <Text style={styles.textStyle2}>New Crypto on Public</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.segment1}>
                <View style={styles.container1}>
                  <Image source={crypto1} />
                  <Text style={styles.textStyle6}>Uniswap</Text>
                  <Text style={styles.greenText}>10.12%</Text>
                </View>
                <View style={styles.container1}>
                  <Image source={crypto2} />
                  <Text style={styles.textStyle6}>FTX Token</Text>
                  <Text style={styles.greenText}>12.86%</Text>
                </View>
                <View style={styles.container1}>
                  <Image source={crypto3} />
                  <Text style={styles.textStyle6}>NEM</Text>
                  <Text style={styles.redText}>-15.28%</Text>
                </View>
                <View style={styles.container1}>
                  <Image source={crypto4} />
                  <Text style={styles.textStyle6}>Polygon</Text>
                  <Text style={styles.redText}>-2.86%</Text>
                </View>
              </View>
              <View style={{width: 24}} />
            </ScrollView>

            <View style={styles.trendingGoups}>
              <Text style={styles.textStyle2}>Trending Groups</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.groupLine}>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Cryptocurrencies</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Bitcoin</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Invester</Text>
                  </View>
                </View>
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.groupLine}>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Coinbase</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Trading</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Binance</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Success</Text>
                  </View>
                </View>
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.groupLine}>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Blockchain</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Finance</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Binary</Text>
                  </View>
                  <View style={styles.group}>
                    <Text style={styles.textStyle7}>#Millionaire</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.textStyle2}>New Crypto on Public</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.segment1}>
                  <View style={styles.container2}>
                    <Image source={group1} />
                    <Text style={styles.textStyle6}>Bitcoin</Text>
                    <Text style={styles.greenText}>10.12%</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image source={group2} />
                    <Text style={styles.textStyle6}>Ethereum</Text>
                    <Text style={styles.greenText}>12.86%</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image source={group3} />
                    <Text style={styles.textStyle6}>Binance</Text>
                    <Text style={styles.redText}>-15.28%</Text>
                  </View>
                  <View style={styles.container2}>
                    <Image source={group4} />
                    <Text style={styles.textStyle6}>Solana</Text>
                    <Text style={styles.redText}>-2.86%</Text>
                  </View>
                </View>
                <View style={{width: 24}} />
              </ScrollView>
            </View>
          </View>
        </>
      );
    }
  };
  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textStyle1}>Chat</Text>
          <TouchableOpacity>
            <Image source={icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Image source={searchIcon} />
            <TextInput
              value={search}
              onChangeText={handleSearch}
              placeholder="Search..."
              placeholderTextColor="#ACADB9"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity>
            <Image source={Filter} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.segment}>
            <TouchableOpacity onPress={() => setCurrentTab('Primary')}>
              <Text style={tab === 'Primary' ? styles.currTab : styles.tab}>
                Primary
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab('Messages')}>
              <Text style={tab === 'Messages' ? styles.currTab : styles.tab}>
                Messages
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab('Market Data')}>
              <Text style={tab === 'Market Data' ? styles.currTab : styles.tab}>
                Market Data
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab('Groups')}>
              <Text style={tab === 'Groups' ? styles.currTab : styles.tab}>
                Groups
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 24}} />
        </ScrollView>
        {renderChat()}
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
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  },
  searchContainer: {
    backgroundColor: '#1A1A1C',
    borderRadius: 18,
    height: 63.8,
    width: 272,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 24,
    gap: 10,
    paddingRight: 24,
  },
  searchInput: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    height: 60,
    width: 180,
    color: '#ACADB9',
  },
  segment: {
    marginTop: 40,
    flexDirection: 'row',
    borderRadius: 32,
    height: 40,
    alignItems: 'center',
    gap: 20,
    marginLeft: 24,
    backgroundColor: '#333333',
  },
  currTab: {
    height: 40,
    width: 108,
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
    width: 108,
    textAlign: 'center',
    textAlignVertical: 'center',
    // borderColor: '#646464',
    // borderWidth: 2,
    borderRadius: 34,
  },
  todaySection: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 45,
    marginBottom: 30,
    gap: 15,
  },
  yesterdaySection: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 30,
    gap: 15,
  },
  profilePic: {
    width: 44,
    height: 44,
  },
  msgContainer: {
    backgroundColor: '#23262F',
    height: 80,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'space-between',
  },
  msgContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  msgNumberContainer: {
    backgroundColor: '#F99F42',
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
  },

  // group chat styles
  groupChat: {
    marginTop: 45,
    marginLeft: 24,
  },
  segment1: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  container1: {
    backgroundColor: '#23262F',
    width: 100,
    height: 126,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  trendingGoups: {
    marginTop: 30,
    gap: 10,
    marginBottom: 30,
  },
  groupLine: {
    flexDirection: 'row',
    gap: 10,
  },
  group: {
    borderColor: '#333333',
    borderWidth: 2,
    height: 48,
    padding: 10,
    alignItems: 'center',
    borderRadius: 48,
  },
  container2: {
    backgroundColor: '#333333',
    width: 100,
    height: 126,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  //
  // text styles
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  textStyle4: {
    color: '#AAAAAA',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  textStyle5: {
    color: '#23262F',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  textStyle6: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  greenText: {
    color: '#23C562',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  redText: {
    color: '#FF1843',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textStyle7: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});

export default Messages;

const BottomNavBar = () => {
  const navigation = useNavigation();

  const home = require('../../assets/images/home-21.png');
  const chart = require('../../assets/images/ChartBar.png');
  const msg = require('../../assets/images/messageG.png');
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
        <TouchableOpacity
          style={navbarStyles.nav}
          onPress={() => navigation.navigate('Signal')}>
          <Image source={chart} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
        <TouchableOpacity style={navbarStyles.nav}>
          <Image source={msg} />
          <View style={navbarStyles.dot} />
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
