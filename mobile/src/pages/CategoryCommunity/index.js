import React from 'react';
import {Image, ScrollView} from 'react-native';

import {
  Container,
  StyledRowContainer,
  StyledGoBack,
  CoinsButton,
  CoinsButtonText,
  ImageContainer,
  StyledText,
  CategoryContainer,
  CategoryTitle,
} from './styles';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HeroEmployerImage from '../../../assets/images/hero_employee.png';

import {useNavigation} from '@react-navigation/native';

const CategoryCommunity = () => {
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
      <CoinsButton>
        <MaterialDesignIcon
          name="currency-usd-circle"
          color="#6D5C01"
          size={28}
        />
        <CoinsButtonText> 20 moedas</CoinsButtonText>
      </CoinsButton>

      <ImageContainer>
        <Image source={HeroEmployerImage} />
      </ImageContainer>
      <StyledText>
        Troque experiências, divulgue seu trabalho, dicas para a gestão do seu
        tempo. Junte moedas e troque por brindes!
      </StyledText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CategoryContainer>
          <CategoryTitle>MEI</CategoryTitle>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Estresse</CategoryTitle>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Empreendedorismo</CategoryTitle>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Casa</CategoryTitle>
        </CategoryContainer>
      </ScrollView>
    </Container>
  );
};

export default CategoryCommunity;
