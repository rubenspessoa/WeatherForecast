import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateLocation } from '../actions';
import { Button } from '../components/common';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = {
  containerStyle: {
    backgroundColor: '#fcfcfc',
  },
  mapStyle: {
    height: '90%',
    width: '100%',
  },
};

class Map extends Component {
  constructor() {
    super();

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onButtonPress() {
    const { latitude, longitude } = this.state.region;
    this.props.updateLocation({ latitude, longitude });
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <MapView
          showsUserLocation
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={this.state.region}
          onRegionChange={region => this.setState({ region })}
          onRegionChangeComplete={region => this.setState({ region })}
        >
          <MapView.Marker
            coordinate={this.state.region}
          />
        </MapView>

        <View style={{ padding: 10 }}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Choose this location
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(null, { updateLocation })(Map);
