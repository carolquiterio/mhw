import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView} from 'react-native';

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
    <ScrollView showsVerticalScrollIndicator={false}>
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
        <Task
          titulo="Buscar crianças na escola"
          horario_inicio="18:00"
          horario_fim="20:00"
        />
        <StyledText>Fique por dentro das novidades da comunidade</StyledText>
        <NewsButton onPress={handleFollowNewsPress}>
          <TextButton>Acompanhar novidades {'   '}</TextButton>
          <AntDesignIcon name="arrowright" size={28} color="#fff" />
        </NewsButton>
      </StyledContainer>
    </ScrollView>
  );
};

export default Home;
