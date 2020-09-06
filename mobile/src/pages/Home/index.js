import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();

  function handleFollowNewsPress() {
    navigation.navigate('CategoryCommunity');
  }
  return (
    <>
      <StyledContainer>
        <RowContainer>
          <StyledText>Seu desempenho</StyledText>
          <StyledRedText>Ver mais</StyledRedText>
        </RowContainer>
        <GraficContainer>
          <Grafic />
        </GraficContainer>
        <RowContainer>
          <StyledText>Próxima tarefa</StyledText>
          <StyledRedText>Ver todas</StyledRedText>
        </RowContainer>
        <Task />
        <StyledText>Fique por dentro das novidades da comunidade</StyledText>
        <NewsButton onPress={handleFollowNewsPress}>
          <TextButton>Acompanhar novidades {'   '}</TextButton>
          <AntDesignIcon name="arrowright" size={28} color="#fff" />
        </NewsButton>
      </StyledContainer>
    </>
  );
};

export default Home;
