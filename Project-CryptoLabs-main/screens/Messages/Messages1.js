import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//
const Messages1 = () => {
  const navigation = useNavigation();

  const voiceMSG = require('../../assets/images/voiceMSG.png');
  const send = require('../../assets/images/send1.png');
  const mic = require('../../assets/images/mic.png');
  const call = require('../../assets/images/call.png');
  const camera = require('../../assets/images/camera.png');
  const userImg = require('../../assets/images/Ellipse19.png');

  //
  const [tab, setCurrentTab] = React.useState('Primary');
  const [msg, setMSG] = React.useState('');

  const handleMSG = text => {
    setMSG(text);
  };

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image source={userImg} style={styles.profilePic} />
            <View style={{gap: -10}}>
              <Text style={styles.textStyle1}>Jessica Jones</Text>
              <Text style={styles.textStyle2}>Online</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 15}}>
            <TouchableOpacity>
              <Image source={call} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={camera} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.msgContainer}>
          <View style={styles.sendContainer}>
            <Text style={styles.textStyle3}>
              Hi, My Name Is Nailoy How Are You ? And What’s Your Name :)
            </Text>
          </View>
          <Text style={styles.textStyle4}>10.52</Text>
          <View style={styles.receiveContainer}>
            <Text style={styles.textStyle3}>Hi, My Name Is Thomsan</Text>
          </View>
          <Text style={styles.textStyle5}>10.53</Text>
          <View style={styles.sendContainer}>
            <Text style={styles.textStyle3}>OKay, Great Name....</Text>
          </View>
          <Text style={styles.textStyle4}>10.53</Text>
          <View style={styles.receiveContainer}>
            <Image source={voiceMSG} />
          </View>
          <Text style={styles.textStyle5}>10.53</Text>
        </View>
      </ScrollView>
      <View style={styles.lastSection}>
        <TouchableOpacity style={styles.micContainer}>
          <Image source={mic} />
        </TouchableOpacity>
        <View style={styles.typeContainer}>
          <TextInput
            value={msg}
            onChangeText={handleMSG}
            placeholder="Write now..."
            placeholderTextColor="#ACADB9"
            style={styles.input}
          />
          <TouchableOpacity>
            <Image source={send} />
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
  header: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profilePic: {
    width: 48,
    height: 48,
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
  lastSection: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 24,
    marginRight: 24,
    //justifyContent: 'space-between',
    gap: 15,
  },
  micContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#34A853',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeContainer: {
    backgroundColor: '#23262F',
    borderRadius: 10,
    height: 59,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 120,
    paddingLeft: 24,
    paddingRight: 24,
  },
  input: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    minWidth: 180,
    maxWidth: 210,
  },
  msgContainer: {
    marginTop: 60,
    marginLeft: 24,
    marginRight: 24,
  },
  sendContainer: {
    backgroundColor: '#2B2B2E',
    borderRadius: 15,
    maxWidth: 253,
    padding: 19,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  receiveContainer: {
    backgroundColor: '#243830',
    borderRadius: 15,
    maxWidth: 253,
    padding: 19,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  //
  // text styles
  textStyle1: {
    color: '#34A853',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-Regula',
    fontSize: 14,
  },
  textStyle4: {
    color: '#918FB7',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginBottom: 30,
  },
  textStyle5: {
    color: '#918FB7',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 30,
  },
  textStyle6: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});

export default Messages1;
