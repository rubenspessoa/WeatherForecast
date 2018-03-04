import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import WeatherForecastItem from './WeatherForecastItem';

const styles = {
  containerStyle: {
    alignSelf: 'center',
    paddingTop: 20,
    flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontWeight: '900',
    padding: 5,
  },
  gifStyle: {
    height: 200,
    width: 415,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
};

class WeatherForecast extends Component {
  renderRow(forecast) {
    return <WeatherForecastItem forecast={forecast} />;
  }

  render() {
    const { dailyForecasts } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(dailyForecasts);

    return (
      <View style={styles.containerStyle}>
        <Text style={{ ...styles.textStyle, fontSize: 20 }}>
          WEEK FORECAST
        </Text>

        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

export default WeatherForecast;
