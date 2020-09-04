import React from 'react';

import {
  StyledContainer,
  RowContainer,
  NewsButton,
  TextButton,
  StyledText,
  GraficContainer,
  StyledRedText,
} from './styles';

import Grafic from '../../components/Grafic';
import Task from '../../components/Task';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <>
      <StyledContainer>
        <StyledText>Seu desempenho</StyledText>
        <GraficContainer>
          <Grafic />
        </GraficContainer>
        <RowContainer>
          <StyledText>Próxima tarefa</StyledText>
          <StyledRedText>Ver todas</StyledRedText>
        </RowContainer>
        <Task />
        <StyledText>Fique por dentro das novidades da comunidade</StyledText>
        <NewsButton>
          <TextButton>Acompanhar novidades {'   '}</TextButton>
          <AntDesignIcon name="arrowright" size={28} color="#fff" />
        </NewsButton>
      </StyledContainer>
    </>
  );
};

export default Home;
