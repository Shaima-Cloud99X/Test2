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
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
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
const Signal = () => {
  const navigation = useNavigation();

  const bell = require('../../assets/images/bellicon.png');
  const searchIcon = require('../../assets/images/MagnifyingGlass.png');
  const menuIcon = require('../../assets/images/Menu.png');
  const union = require('../../assets/images/Union.png');
  const msgUser1 = require('../../assets/images/Rectangle3.png');
  const msgUser2 = require('../../assets/images/msgUser2.png');
  const msgUser3 = require('../../assets/images/msgUser3.png');
  const msgUser4 = require('../../assets/images/msgUser4.png');
  const msgUser5 = require('../../assets/images/msgUser5.png');
  const msgUser6 = require('../../assets/images/msgUser6.png');
  const Viewmessage = require('../../assets/images/Viewmessage.png');
  const deliveredmessage = require('../../assets/images/deliveredmessage.png');
  const save = require('../../assets/images/Rectangle36.png');
  const read = require('../../assets/images/read.png');
  const deleteIcon = require('../../assets/images/delete.png');

  //
  const [tab, setCurrentTab] = React.useState('Messenges');
  const [selectedMessage, setSelectedMessage] = React.useState(false);
  const handleLongPress = () => {
    setSelectedMessage(!selectedMessage);
  };

  const renderTab = () => {
    if (tab === 'Messenges') {
      return (
        <View style={styles.container}>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser1} />
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Text style={styles.textStyle3}>Cryptolab VIP</Text>
                  <Image source={union} />
                </View>
                <Text style={styles.textStyle4}>Today’s top chart</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:20</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser2} />
              <TouchableOpacity>
                <Text style={styles.textStyle3}>Calvin Flores</Text>
                <Text style={styles.textStyle4}>
                  Hi, bro! Come to my group!
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:13</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>1</Text>
              </View>
            </View>
          </View>
          <View
            style={
              selectedMessage ? styles.chatContainer1 : styles.chatContainer
            }>
            <View style={styles.chat}>
              <Image source={msgUser3} />
              <TouchableOpacity onLongPress={handleLongPress}>
                <Text style={styles.textStyle3}>Gregory Bell</Text>
                <Text style={styles.textStyle4}>
                  Will you stop ignoring me ?
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:13</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>164</Text>
              </View>
            </View>
            {selectedMessage && (
              <View style={styles.options}>
                <TouchableOpacity>
                  <Image source={save} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={read} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={deleteIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser4} />
              <TouchableOpacity>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Text style={styles.textStyle3}>Soham Henry</Text>
                  <Image source={union} />
                </View>
                <Text style={styles.textStyle5}>Me: How's it going</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.time}>8:30</Text>
              <Image source={Viewmessage} />
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser5} />
              <TouchableOpacity>
                <Text style={styles.textStyle3}>Mother ❤</Text>
                <Text style={styles.textStyle5}>
                  Me: Yes, of course come, ...
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.time}>7:20</Text>
              <Image source={deliveredmessage} />
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser6} />
              <TouchableOpacity>
                <Text style={styles.textStyle3}>Brother</Text>
                <Text style={styles.textStyle5}>Ok. Good bay!</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.time}>Yesterday</Text>
          </View>
        </View>
      );
    } else if (tab === 'VIP') {
      return (
        <View style={styles.container}>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser1} />
              <TouchableOpacity>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Text style={styles.textStyle3}>Cryptolab VIP</Text>
                  <Image source={union} />
                </View>
                <Text style={styles.textStyle4}>Today’s top chart</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:20</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>2</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (tab === 'Notification') {
    }
  };
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
          <TouchableOpacity onPress={() => setCurrentTab('Notification')}>
            <Text
              style={
                tab === 'Notification' ? styles.currTab : styles.textStyle2
              }>
              Notification
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menu}>
          <Image source={menuIcon} />
        </TouchableOpacity>
        {renderTab()}
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
  menu: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    alignSelf: 'flex-end',
  },
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    gap: 28,
    marginBottom: 30,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
  },
  textStyle4: {
    color: '#34A853',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    width: 206,
  },
  time: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
  },
  messegesContainer: {
    backgroundColor: '#34A853',
    height: 26,
    borderRadius: 30,
    width: 'auto',
    alignItems: 'center',
  },
  msgNumber: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  textStyle5: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  options: {
    height: 82,
    backgroundColor: '#34A853',
    width: 253,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  chatContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: -200,
  },
});

export default Signal;
