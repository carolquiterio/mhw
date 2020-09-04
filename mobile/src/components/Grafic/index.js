import React from 'react';
import {BarChart, XAxis, YAxis} from 'react-native-svg-charts';
import {View} from 'react-native';

const Grafic = () => {
  const fill = '#6A2C70';
  const data = [50, 40, 40, 60, 65, 34, 50];
  const yData = [0, 50, 100];
  const XData = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

  const contentInset = {top: 20, bottom: 20};
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <View
        style={{
          height: 260,
          flexDirection: 'row',
          marginRight: 10,
        }}>
        <YAxis
          data={yData}
          contentInset={contentInset}
          svg={{
            fill: '#757575',
            fontSize: 10,
          }}
          numberOfTicks={3}
          formatLabel={value => `${value}%`}
        />
      </View>
      <View style={{width: '89%'}}>
        <BarChart
          style={{
            height: 250,
            width: '100%',
          }}
          data={data}
          svg={{
            fill: '#6A2C70',
            strokeWidth: 8,
            strokeLinejoin: 'round',
            //strokeLinecap: 'round',
            stroke: '#6A2C70',
          }}
          contentInset={contentInset}
          spacingInner={0.7}></BarChart>

        <XAxis
          style={{marginHorizontal: 0, marginTop: 6, width: 330}}
          data={XData}
          formatLabel={(value, index) => 'day ' + value}
          contentInset={{left: 12, right: 12}}
          svg={{fontSize: 10, fill: '#757575'}}
        />
      </View>
    </View>
  );
};

export default Grafic;
