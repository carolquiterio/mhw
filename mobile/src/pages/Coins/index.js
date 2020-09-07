import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import coinImage from '../../../assets/images/piggy_bank.png';

import {
  Container,
  StyledRowContainer,
  StyledGoBack,
  ImageContainer,
  FormContainer,
  CoinsButton,
  CoinsButtonText,
  StyledTitle,
  StyledAction,
  StyledActionPink,
  RowContainer,
  ColumnContainer,
  IconContainer,
  StyledActionCoins,
  MimoButton,
  MimoButtonText,
} from './styles';

const Coins = () => {
  const navigation = useNavigation();

  function handleGoBackPress() {
    navigation.goBack();
  }

  function handleAwardPress() {
    navigation.navigate('Awards');
  }

  return (
    <Container>
      <StyledRowContainer onPress={handleGoBackPress}>
        <AntDesignIcon name="arrowleft" size={20} color="#fff" />
        <StyledGoBack>Voltar</StyledGoBack>
      </StyledRowContainer>

      <ImageContainer>
        <Image source={coinImage} />
      </ImageContainer>
      <CoinsButton>
        <MaterialDesignIcon
          name="currency-usd-circle"
          color="#6D5C01"
          size={28}
        />
        <CoinsButtonText> 20 Moedas</CoinsButtonText>
      </CoinsButton>
      <FormContainer>
        <StyledTitle>Como ganhar moedas?</StyledTitle>
        <RowContainer>
          <ColumnContainer>
            <IconContainer>
              <MaterialDesignIcon
                name="comment-processing"
                color="#B83B5E"
                size={28}
              />
            </IconContainer>
            <StyledAction>Comentários:</StyledAction>
            <StyledActionPink>5 moedas</StyledActionPink>
          </ColumnContainer>
          <ColumnContainer>
            <IconContainer>
              <MaterialDesignIcon
                name="comment-processing"
                color="#B83B5E"
                size={28}
              />
            </IconContainer>
            <StyledAction>Publicar:</StyledAction>
            <StyledActionPink>10 moedas</StyledActionPink>
          </ColumnContainer>
          <ColumnContainer>
            <IconContainer>
              <MaterialDesignIcon
                name="comment-processing"
                color="#B83B5E"
                size={28}
              />
            </IconContainer>
            <StyledAction>Gostei:</StyledAction>
            <StyledActionPink>1 moeda</StyledActionPink>
          </ColumnContainer>
        </RowContainer>
        <StyledActionCoins>
          Você pode ganhar até 16 moedas diárias!
        </StyledActionCoins>
        <MimoButton onPress={handleAwardPress}>
          <FeatherIcon name="gift" color="#fff" size={18} />
          <MimoButtonText> {'   '}Resgatar prêmio</MimoButtonText>
        </MimoButton>
        <StyledActionCoins>Você precisa de 1.000 moedas!</StyledActionCoins>
      </FormContainer>
    </Container>
  );
};

export default Coins;
