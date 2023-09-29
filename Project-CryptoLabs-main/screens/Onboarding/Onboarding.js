import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const details = [
  {
    id: 1,
    title: 'Fastest Growing Crypto App',
    description: 'Running your Crypto App is easier with Socially',
    image: require('../../assets/images/Cryptoicons.png'),
  },
  {
    id: 2,
    title: 'Secure Reliable Crypto App',
    description: 'Running your Crypto App is easier with Socially',
    image: require('../../assets/images/SecureIcon.png'),
  },
  {
    id: 3,
    title: 'Bringing Communities Together',
    description: 'Running your Crypto App is easier with Socially',
    image: require('../../assets/images/undraw_community_re_cyrm1.png'),
  },
];

const OnboardingScreen = ({item}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.image}>
        <Image source={item.image} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const Paginator = ({data, scrollX}) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={{flexDirection: 'row', height: 64, gap: 20}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 40, 20],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.rectangle, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const Onboarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (currentScreen === 2) {
      // After 2 seconds on the third onboarding screen, navigate to the Welcome Screen
      const timer = setTimeout(() => {
        navigation.navigate('Welcome');
      }, 2000);
    }
  }, [currentScreen]);

  const viewableItemsChanged = React.useRef(({viewableItems}) => {
    setCurrentScreen(viewableItems[0].index);
  }).current;

  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const slideRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={details}
          renderItem={({item}) => <OnboardingScreen item={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slideRef}
          onMomentumScrollEnd={event => {
            const contentOffsetX = event.nativeEvent.contentOffset.x;
            const screenIndex = Math.round(contentOffsetX / width);
            setCurrentScreen(screenIndex);
          }}
        />
      </View>
      <Paginator data={details} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141416',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    width: 323,
    height: 364,
    marginBottom: '15%',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 33,
    textAlign: 'center',
    width: 380,
  },
  description: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'center',
    width: 263,
    marginBottom: '15%',
    alignSelf: 'center',
  },
  rectangle: {
    height: 12,
    backgroundColor: '#34A853',
    borderRadius: 55,
  },
});

export default Onboarding;
