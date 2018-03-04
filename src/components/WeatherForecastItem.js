import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  textStyle: {
    alignSelf: 'flex-start',
    color: '#000',
    fontWeight: '900',
    paddingRight: 10,
  },
};

const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();

  return { weekday, month, day };
};

const WeatherForecastItem = (props) => {
  const {
    time,
    summary,
    temperatureMax,
    temperatureMin,
  } = props.forecast;

  const date = convertTimestampToDate(time);

  return (
    <View>
      <View style={{ flexDirection: 'row', width: '80%' }}>
        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
          <Text style={styles.textStyle}>
            {date.weekday.toUpperCase()}
          </Text>
          <Text>
            {`${date.month} ${date.day}`}
          </Text>
        </View>

        <View style={{ flexDirection: 'column', padding: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flexWrap: 'wrap', fontWeight: '900' }}>
              {summary}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flexWrap: 'wrap' }}>
              {`Max: ${temperatureMax.toFixed(0)}ºc  Min: ${temperatureMin.toFixed(0)}ºc`}
            </Text>
          </View>
        </View>
      </View>
    </View>

  );
};

export default WeatherForecastItem;
