import React from 'react';
import {BarChart, Grid} from 'react-native-svg-charts';

const Grafic = () => {
  const fill = '#6A2C70';
  const data = [50, 10, 40, 95, 85, 24, 50];

  return (
    <BarChart
      style={{
        height: 250,
      }}
      data={data}
      svg={{fill}}
      contentInset={{top: 30, bottom: 30}}
      spacingInner={0.5}
      numberOfTicks={1}>
      <Grid />
    </BarChart>
  );
};

export default Grafic;
