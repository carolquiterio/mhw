import React from 'react';
import {Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  StyledGoBack,
  StyledRowContainer,
  StyledText,
  StyledTitle,
  RankContainer,
  StyledRow,
  StyledMediumText,
  StyledButton,
  ColumnContainer,
  StyledButtonText,
  ImageContainer,
  StyledImage,
  StyledButton2,
  StyledButton1,
  RankContainer2,
  RankContainer1,
} from './styles';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import profileImage from '../../../assets/images/girl.png';
import profileImagee from '../../../assets/images/girl2.png';
import profileImageee from '../../../assets/images/girl3.png';

const Ranking = () => {
  const navigation = useNavigation();

  function handleGoBackPress() {
    navigation.goBack();
  }
  return (
    <Container>
      <StyledRow>
        <AntDesignIcon
          name="arrowleft"
          size={20}
          color="#8a4290"
          onPress={handleGoBackPress}
        />
        <StyledGoBack> Voltar</StyledGoBack>
      </StyledRow>
      <StyledTitle>Destaques da comunidade!</StyledTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RankContainer2>
          <StyledRowContainer>
            <FontAwesome5Icon name="award" size={26} color="#FBD300" />
            <StyledText>Liana Silva</StyledText>
          </StyledRowContainer>
          <StyledMediumText>Gestora</StyledMediumText>
          <StyledButton2>
            <StyledButtonText>Ver mais</StyledButtonText>
          </StyledButton2>
          <ImageContainer>
            <StyledImage source={profileImage} />
          </ImageContainer>
        </RankContainer2>
        <RankContainer>
          <StyledRowContainer>
            <FontAwesome5Icon name="award" size={26} color="#FBD300" />
            <StyledText>Clara Monteiro</StyledText>
          </StyledRowContainer>
          <StyledMediumText>Vendedora</StyledMediumText>
          <StyledButton>
            <StyledButtonText>Ver mais</StyledButtonText>
          </StyledButton>
          <ImageContainer>
            <StyledImage source={profileImage} />
          </ImageContainer>
        </RankContainer>
        <RankContainer1>
          <StyledRowContainer>
            <FontAwesome5Icon name="award" size={26} color="#FBD300" />
            <StyledText>Marta Moraes</StyledText>
          </StyledRowContainer>
          <StyledMediumText>Professora</StyledMediumText>
          <StyledButton1>
            <StyledButtonText>Ver mais</StyledButtonText>
          </StyledButton1>
          <ImageContainer>
            <StyledImage source={profileImage} />
          </ImageContainer>
        </RankContainer1>
        <RankContainer>
          <StyledRowContainer>
            <FontAwesome5Icon name="award" size={26} color="#FBD300" />
            <StyledText>Giovana Martins</StyledText>
          </StyledRowContainer>
          <StyledMediumText>Designer</StyledMediumText>
          <StyledButton>
            <StyledButtonText>Ver mais</StyledButtonText>
          </StyledButton>
          <ImageContainer>
            <StyledImage source={profileImage} />
          </ImageContainer>
        </RankContainer>
      </ScrollView>
    </Container>
  );
};

export default Ranking;
