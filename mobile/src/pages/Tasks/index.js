import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, FlatList} from 'react-native';
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
      
      <FlatList 
            data={activities}
            keyExtractor={ activity => String(activity.id)}
            renderItem={({ item: activity }) => (
            <>
              <StyledText>Casa & Família</StyledText>
              <Task />

             <StyledText>Trabalho</StyledText>
             <Task />
             <Task />

             <StyledText>Estudos</StyledText>
             <Task />
           </ >
           )}
        />



    </Container>
  );
};

export default Tasks;
