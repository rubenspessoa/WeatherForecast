import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  containerStyle: {
    alignSelf: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontWeight: '900',
    padding: 10,
  },
  gifStyle: {
    height: 200,
    width: 415,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
};

const renderGif = (icon) => {
  switch (icon) {
    case 'clear-day':
      return (
        <Image
          source={require('../assets/gif/clear-day.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'clear-night':
      return (
        <Image
          source={require('../assets/gif/clear-night.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'rain':
      return (
        <Image
          source={require('../assets/gif/rain.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'snow':
      return (
        <Image
          source={require('../assets/gif/snow.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'thunderstorm':
      return (
        <Image
          source={require('../assets/gif/thunderstorm.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'tornado':
      return (
        <Image
          source={require('../assets/gif/wind.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'wind':
      return (
        <Image
          source={require('../assets/gif/wind.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'cloudy':
      return (
        <Image
          source={require('../assets/gif/cloudy.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'fog':
      return (
        <Image
          source={require('../assets/gif/wind.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'hail':
      return (
        <Image
          source={require('../assets/gif/hail.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'partly-cloudy-day':
      return (
        <Image
          source={require('../assets/gif/cloudy.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    case 'partly-cloudy-night':
      return (
        <Image
          source={require('../assets/gif/cloudy.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
    default:
      return (
        <Image
          source={require('../assets/gif/source.gif')}
          style={styles.gifStyle}
          resizeMode="contain"
        />);
  }
}

const CurrentWeather = (props) => {
  const { temperature, summary, icon } = props.currentWeather;

  return (
    <View style={styles.containerStyle}>

      <Text style={{ ...styles.textStyle, fontSize: 15 }}>
        {summary}
      </Text>

      {renderGif(icon)}

      <Text style={{ alignSelf: 'center' }}>
        <Text style={{ ...styles.textStyle, fontSize: 60 }}>
          {temperature.toFixed(0)}
        </Text>
        <Text style={{ ...styles.textStyle, fontSize: 15 }}>
          ºC
        </Text>
      </Text>
    </View>
  );
};

export default CurrentWeather;
