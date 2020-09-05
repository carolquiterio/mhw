import React, {useState} from 'react';
import {Switch, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  StyledTitle,
  StyledText,
  FormContainer,
  StyledInput,
  InputContainer,
  StyledGoBack,
  StyledRowContainer,
  StyledBell,
  RememberRowContainer,
  StyledRememberText,
  StyledSwitch,
  CategoryButtonContainer,
  CategoryTitleIcon,
  CategoryIconContainer,
  ReadyButton,
  ReadyButtonText,
} from './styles';

import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const NewTask = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  function handleGoBackPress() {
    navigation.goBack();
  }

  return (
    <Container>
      <StyledRowContainer>
        <AntDesignIcon
          name="arrowleft"
          size={20}
          color="#fff"
          onPress={handleGoBackPress}
        />
        <StyledGoBack> Voltar</StyledGoBack>
      </StyledRowContainer>
      <StyledTitle>Criar nova tarefa</StyledTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <RememberRowContainer>
            <StyledBell>
              <FontistoIcon name="bell" color="#B83B5E" size={20} />
            </StyledBell>
            <StyledRememberText>Lembrar-me</StyledRememberText>
            <StyledSwitch
              trackColor={{false: '#21A29A', true: '#B83B5E'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </RememberRowContainer>
          <StyledText>Categoria</StyledText>
          <CategoryButtonContainer>
            <CategoryIconContainer>
              <FeatherIcon name="plus" size={17} color="#fff" />
            </CategoryIconContainer>
            <CategoryTitleIcon>Adicionar</CategoryTitleIcon>
          </CategoryButtonContainer>
          <ReadyButton>
            <ReadyButtonText>Criar tarefa</ReadyButtonText>
          </ReadyButton>
        </FormContainer>
      </ScrollView>
    </Container>
  );
};

export default NewTask;
