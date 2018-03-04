import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';

const styles = {
  viewStyle: {
    backgroundColor: '#fcfcfc',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 80,
    fontWeight: '900',
    textAlign: 'center',
  },
  footerStyle: {
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
  },
  linkStyle: {
    color: '#0097FF',
    alignSelf: 'center',
  },
};

class Home extends Component {
  onGoButtonPress() {
    Actions.Main();
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={{ ...styles.titleStyle, color: '#0097FF' }}>
          Weather
        </Text>

        <Text style={{ ...styles.titleStyle, fontSize: 60 }}>
          Forecast
        </Text>

        <Button onPress={this.onGoButtonPress.bind(this)}>
            GO!
        </Button>

        <View style={styles.footerStyle}>

          <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: '900' }}>
            CREDITS:
          </Text>

          <Text
            style={styles.linkStyle}
            onPress={() => Linking.openURL('https://darksky.net/dev')}
          >
            DarkSky API
          </Text>

          <Text
            style={styles.linkStyle}
            onPress={() => Linking.openURL('http://ethanbarnowsky.tumblr.com/')}
          >
            Ethan Barnowsky
          </Text>
        </View>
      </View>
    );
  }
}

export default Home;
