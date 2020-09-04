import React, {useState} from 'react';
import {Switch} from 'react-native';

import {
  Container,
  StyledTitle,
  StyledText,
  FormContainer,
  StyledInput,
  InputContainer,
  StyledSwitch,
} from './styles';

import FeatherIcon from 'react-native-vector-icons/Feather';

const NewTask = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container>
      <StyledTitle>Criar nova tarefa</StyledTitle>
      <FormContainer>
        <StyledText>Nome da tarefa</StyledText>
        <InputContainer>
          <StyledInput placeholder="Ex: Meditar"></StyledInput>
        </InputContainer>
        <StyledText>Data</StyledText>
        <InputContainer>
          <StyledInput placeholder="Selecionar"></StyledInput>
          <FeatherIcon name="calendar" color="#6A2C70" size={20} />
        </InputContainer>
        <StyledText>Horário</StyledText>
        <InputContainer>
          <StyledInput placeholder="Selecionar"></StyledInput>
          <FeatherIcon name="clock" color="#6A2C70" size={20} />
        </InputContainer>
        <StyledText>Tempo estimado para realizar a tarefa</StyledText>
        <InputContainer>
          <StyledInput placeholder="Ex: 1h 30min"></StyledInput>
          <FeatherIcon name="clock" color="#6A2C70" size={20} />
        </InputContainer>
        <StyledText>Responsável</StyledText>
        <InputContainer>
          <StyledInput placeholder="Ex: Marido"></StyledInput>
        </InputContainer>
        <Switch
          trackColor={{false: '#21A29A', true: '#B83B5E'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </FormContainer>
    </Container>
  );
};

export default NewTask;
