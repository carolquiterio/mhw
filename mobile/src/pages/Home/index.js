import React from 'react';
import {View} from 'react-native';
import {BarChart, Grid} from 'react-native-svg-charts';
import {StyledContainer, StyledText, GraficContainer} from './styles';

import Grafic from '../../components/Grafic';

const Home = () => {
  return (
    <>
      <StyledContainer>
        <Grafic />
        <StyledText>Home</StyledText>
      </StyledContainer>
    </>
  );
};

export default Home;
