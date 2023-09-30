// // import React from 'react';
// // import {
// //   View,
// //   StyleSheet,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// // } from 'react-native';
// // import {useNavigation} from '@react-navigation/native';

// // const Location = () => {
// //   const navigation = useNavigation();

// //   const arrowLeft = require('../../assets/images/CaretLeft.png');
// //   const location = require('../../assets/images/subway_location-3.png');

// //   return (
// //     <View style={styles.window}>
// //       <ScrollView showsVerticalScrollIndicator={false}>
// //         <View style={styles.header}>
// //           <TouchableOpacity onPress={() => navigation.goBack()}>
// //             <Image source={arrowLeft} />
// //           </TouchableOpacity>
// //           <Text style={styles.title}>Verify Location</Text>
// //           <View style={{width: 24, height: 24}} />
// //         </View>
// //         <View style={styles.container}>
// //           <Text style={styles.textStyle2}>
// //             Turn on location service on your device settings to improve
// //             experience and discover community nearby
// //           </Text>
// //           <Image source={location} />
// //         </View>
// //         <TouchableOpacity style={styles.button}>
// //           <Text style={styles.textStyle1}>Turn On Location</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={{width: 78, alignSelf: 'center'}}>
// //           <Text style={styles.textStyle3}>Not Now</Text>
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   window: {
// //     flex: 1,
// //     backgroundColor: '#141416',
// //   },
// //   title: {
// //     color: '#fff',
// //     fontFamily: 'Poppins-Medium',
// //     fontSize: 27,
// //   },
// //   header: {
// //     marginTop: 30,
// //     marginLeft: 24,
// //     marginRight: 24,
// //     marginBottom: 30,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     height: 40,
// //   },
// //   container: {
// //     marginLeft: 24,
// //     marginRight: 24,
// //     gap: 60,
// //     alignItems: 'center',
// //   },
// //   textStyle1: {
// //     color: '#fff',
// //     fontFamily: 'Poppins-SemiBold',
// //     fontSize: 16,
// //   },
// //   textStyle2: {
// //     color: '#ACADB9',
// //     fontFamily: 'Poppins-Regular',
// //     fontSize: 14,
// //     width: 305,
// //     textAlign: 'center',
// //     marginTop: 20,
// //   },
// //   button: {
// //     marginTop: 80,
// //     marginLeft: 24,
// //     marginRight: 24,
// //     justifyContent: 'center',
// //     height: 67,
// //     borderRadius: 14,
// //     backgroundColor: '#34A853',
// //     alignItems: 'center',
// //   },
// //   textStyle3: {
// //     textDecorationLine: 'underline',
// //     color: '#ACADB9',
// //     fontFamily: 'Poppins-Regular',
// //     fontSize: 14,
// //     textAlign: 'center',
// //     marginTop: 40,
// //   },
// // });

// // export default Location;

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const Location = () => {
//   const navigation = useNavigation();

//   const arrowLeft = require('../../assets/images/CaretLeft.png');
//   const location = require('../../assets/images/subway_location-3.png');

//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           'https://api.mspace.lk/lbs/request', // Replace with your API endpoint
//           {
//             applicationId: 'APP_008054',
//             password: '6b228011f46537a92d11e03fa4c9fa04',
//             version: '2.0',
//             requesterId: 'tel:94719087869',
//             subscriberId: 'tel:94719087869',
//             serviceType: 'IMMEDIATE',
//           }
//         );
        
        
//         console.log('API Response:', response);

//         // Handle the API response here
//         if (response.data && response.data.latitude && response.data.longitude) {
//           setLatitude(response.data.latitude);
//           setLongitude(response.data.longitude);
//         } 
//         else if(response.data && response.data.statusCode === 'E1951'){
//           Alert.alert('Error', 'Error123.');
//         }

//         else {
//           Alert.alert('Error', 'Failed to fetch location data from the API.');
//         }
//       } catch (error) {
//         // Handle API error
//         console.error('API Error:', error);
//         Alert.alert('Error', 'Failed to connect to the API.');
//       }
//     };

//     fetchData(); // Call the fetchData function when the component loads
//   }, []); // The empty dependency array ensures this runs only once

  

//   return (
//     <View style={styles.window}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={arrowLeft} />
//           </TouchableOpacity>
//           <Text style={styles.title}>Verify Location</Text>
//           <View style={{ width: 24, height: 24 }} />
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.textStyle2}>
//             Latitude: {latitude} | Longitude: {longitude}
//           </Text>
//           <Image source={location} />
//         </View>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.textStyle1}>Turn On Location</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ width: 78, alignSelf: 'center' }}>
//           <Text style={styles.textStyle3}>Not Now</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   window: {
//     flex: 1,
//     backgroundColor: '#141416',
//   },
//   title: {
//     color: '#fff',
//     fontFamily: 'Poppins-Medium',
//     fontSize: 27,
//   },
//   header: {
//     marginTop: 30,
//     marginLeft: 24,
//     marginRight: 24,
//     marginBottom: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 40,
//   },
//   container: {
//     marginLeft: 24,
//     marginRight: 24,
//     gap: 60,
//     alignItems: 'center',
//   },
//   textStyle1: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 16,
//   },
//   textStyle2: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     width: 305,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   button: {
//     marginTop: 80,
//     marginLeft: 24,
//     marginRight: 24,
//     justifyContent: 'center',
//     height: 67,
//     borderRadius: 14,
//     backgroundColor: '#34A853',
//     alignItems: 'center',
//   },
//   textStyle3: {
//     textDecorationLine: 'underline',
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     textAlign: 'center',
//     marginTop: 40,
//   },
// });

// export default Location;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Location = () => {
  const navigation = useNavigation();

  const arrowLeft = require('../../assets/images/CaretLeft.png');
  const location = require('../../assets/images/subway_location-3.png');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://api.mspace.lk/lbs/request', // Replace with your API endpoint
        {
          applicationId: 'APP_008054',
          password: '6b228011f46537a92d11e03fa4c9fa04',
          version: '2.0',
          requesterId: 'tel:94719087869',
          subscriberId: 'tel:94719087869',
          serviceType: 'IMMEDIATE',
        }
      );

      console.log('API Response:', response);

      if (response.data && response.data.statusCode === 'E1951') {
        setLatitude(response.data.latitude);
        setLongitude(response.data.longitude);
      } else {
        Alert.alert('Error', 'Failed to fetch location data from the API.');
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'Failed to connect to the API.');
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function when the component loads
  }, []);

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.title}>Verify Location</Text>
          <View style={{ width: 24, height: 24 }} />
        </View>
        <View style={styles.container}>
          {latitude !== '' && longitude !== '' ? (
            <Text style={styles.textStyle2}>
              Latitude: {latitude} | Longitude: {longitude}
            </Text>
          ) : (
            <Text style={styles.textStyle2}>Loading...</Text>
          )}
          <Image source={location} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle1}>Turn On Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 78, alignSelf: 'center' }}>
          <Text style={styles.textStyle3}>Not Now</Text>
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
    marginLeft: 24,
    marginRight: 24,
    gap: 60,
    alignItems: 'center',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 305,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 80,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
    height: 67,
    borderRadius: 14,
    backgroundColor: '#34A853',
    alignItems: 'center',
  },
  textStyle3: {
    textDecorationLine: 'underline',
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Location;
