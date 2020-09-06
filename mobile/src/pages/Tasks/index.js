import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, FlatList} from 'react-native';
import {
  Container,
  DayContainer,
  DayContainerActive,
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
  const [activities, setActivities] = useState([]);

  function handleNewTaskPress() {
    navigation.navigate('NewTask');
  }

  async function loadTasks(){
    const response = await api.get('/activities');
  
    setActivities(response.data);
  }
  
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Container>
      <NewTaskButton onPress={handleNewTaskPress}>
        <MaterialIcon name="plus" size={22} color="#fff" />
        <ButtonText> Nova tarefa</ButtonText>
      </NewTaskButton>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DayContainerActive>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>5</BoldDayContainerText>
        </DayContainerActive>
        <DayContainer>
          <DayContainerText>Ter</DayContainerText>
          <BoldDayContainerText>6</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Qua</DayContainerText>
          <BoldDayContainerText>7</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Qui</DayContainerText>
          <BoldDayContainerText>8</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Sex</DayContainerText>
          <BoldDayContainerText>9</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Seg</DayContainerText>
          <BoldDayContainerText>10</BoldDayContainerText>
        </DayContainer>
        <DayContainer>
          <DayContainerText>Ter</DayContainerText>
          <BoldDayContainerText>11</BoldDayContainerText>
        </DayContainer>
      </ScrollView>
      
      <FlatList 
            data={activities}
            showsVerticalScrollIndicator={false}
            keyExtractor={ activity => String(activity.id)}
            renderItem={({ item: activity }) => (
            <>
              <StyledText>Casa & Família</StyledText>
              <Task titulo={activity.titulo} horario_inicio={activity.horario_inicio} horario_fim={activity.horario_fim} feito="true" />

             <StyledText>Trabalho</StyledText>
             <Task titulo={activity.titulo} horario_inicio={activity.horario_inicio} horario_fim={activity.horario_fim} feito="false" />

             <StyledText>Estudos</StyledText>
             <Task titulo={activity.titulo} horario_inicio={activity.horario_inicio} horario_fim={activity.horario_fim} feito="false" />

           </ >
           )}
        />



    </Container>
  );
};

export default Tasks;
