import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {ScrollView} from 'react-native';
import {
  Container,
  DayContainer,
  DayContainerText,
  ButtonText,
  NewTaskButton,
  BoldDayContainerText,
  TasksContainer,
  StyledText,
} from './styles';

import Task from '../../components/Task';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tasks = () => {
  const navigation = useNavigation();

  function handleNewTaskPress() {
    navigation.navigate('NewTask');
  }

  return (
    <Container>
      <NewTaskButton onPress={handleNewTaskPress}>
        <MaterialIcon name="plus" size={22} color="#fff" />
        <ButtonText> Nova tarefa</ButtonText>
      </NewTaskButton>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainer>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StyledText>Casa & Família</StyledText>
        <Task />
        <StyledText>Trabalho</StyledText>
        <Task />
        <Task />
        <StyledText>Estudos</StyledText>
        <Task />
        <StyledText>Casa & Família</StyledText>
        <Task />
        <Task />
        <StyledText>Trabalho</StyledText>
        <Task />
        <StyledText>Estudos</StyledText>
        <Task />
      </ScrollView>
    </Container>
  );
};

export default Tasks;
