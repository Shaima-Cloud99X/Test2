import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/Onboarding/SplashScreen';
import Onboarding from './screens/Onboarding/Onboarding';
import Welcome from './screens/Onboarding/Welcome';
import Register from './screens/Register/Register';
import PhoneNumber from './screens/Register/PhoneNumber';
import Verification from './screens/Register/Verification';
import Login from './screens/Login/Login';
import ForgotPassword from './screens/Login/ForgotPassword';
import VerifyEmail from './screens/Login/VerifyEmail';
import ResetPassword from './screens/Login/ResetPassword';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import Preferences from './screens/Profile/Preferences';
import EditInformation from './screens/Profile/EditInfo';
import InviteFriend from './screens/Profile/InviteFriends';
import AccountSecurity from './screens/Profile/AccountSecurity';
import IDCardVerification from './screens/Profile/IDCardVerification';
import VerifiedScreen from './screens/Profile/VerifiedScreen';
import Signal from './screens/Signal/Signal';
import Subscription from './screens/Profile/Subscription';
import Location from './screens/Profile/Location';
import FaceID from './screens/Profile/FaceID';
import Chat from './screens/Signal/Chat';
import Signal1 from './screens/Signal/Signal1';
import Messages from './screens/Messages/Messages';
import Messages1 from './screens/Messages/Messages1';
import TouchID from './screens/Profile/TouchID';
import CongratsScreen from './screens/Register/Congrats';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditInformation"
          component={EditInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InviteFriend"
          component={InviteFriend}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountSecurity"
          component={AccountSecurity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IDCardVerification"
          component={IDCardVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifiedScreen"
          component={VerifiedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signal"
          component={Signal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Subscription"
          component={Subscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FaceID"
          component={FaceID}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signal1"
          component={Signal1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Messages1"
          component={Messages1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TouchID"
          component={TouchID}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CongratsScreen"
          component={CongratsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
