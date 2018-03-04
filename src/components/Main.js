import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateLocation } from '../actions';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

const styles = {
  containerStyle: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
};

class Main extends Component {
  componentWillMount() {
    const { latitude, longitude, updateLocation } = this.props;

    if (latitude === '' && longitude === '') {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = parseFloat(position.coords.latitude);
        const long = parseFloat(position.coords.longitude);

        updateLocation({ latitude: lat, longitude: long });
      });
    } else {
      updateLocation({ latitude, longitude });
    }
  }

  renderBody() {
    const { error, currently, dailyForecasts } = this.props;

    if (error !== '') {
      return (
        <Text style={{ alignSelf: 'center' }}>
          {error}
        </Text>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <CurrentWeather currentWeather={currently} />
        <WeatherForecast dailyForecasts={dailyForecasts} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderBody()}
      </View>
    );
  }
}

const mapStateToProps = ({ forecast }) => {
  const { response, error } = forecast;

  if (response !== '') {
    const {
      daily,
      latitude,
      longitude,
      currently,
    } = response;

    const dailyForecasts = daily.data.map((val, timestamp) => ({ ...val, timestamp }));

    return {
      currently,
      dailyForecasts,
      latitude,
      longitude,
      error,
    };
  }

  return {
    error,
    currently: '',
    dailyForecasts: [],
    latitude: '',
    longitude: '',
  };
};

export default connect(mapStateToProps, { updateLocation })(Main);
