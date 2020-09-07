import React from 'react';
import {Image, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  StyledGoBack,
  StyledRowContainer,
  StyledTitle,
  FormContainer,
  AwardContainer,
  ImageContainer,
  RowAwardContainer,
  ContainerTitle,
  ImageColumnContainer,
  ContainerText,
  StyledColumnContainer,
  CoinsButton,
  CoinsButtonText,
  IconContainer,
} from './styles';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import sebraeImage from '../../../assets/images/sebrae.png';

const Awards = () => {
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
      <StyledTitle>Prêmios disponíveis</StyledTitle>

      <FormContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AwardContainer>
            <RowAwardContainer>
              <ImageColumnContainer>
                <ImageContainer>
                  <Image source={sebraeImage} />
                </ImageContainer>
              </ImageColumnContainer>
              <CoinsButton>
                <MaterialDesignIcon
                  name="currency-usd-circle"
                  color="#6D5C01"
                  size={21}
                />
                <CoinsButtonText> 1000</CoinsButtonText>
              </CoinsButton>
              <StyledColumnContainer>
                <RowAwardContainer>
                  <ContainerTitle>Excel básico</ContainerTitle>
                </RowAwardContainer>
                <ContainerText>100% de bolsa</ContainerText>
                <ContainerText>Duração: 2 meses</ContainerText>
                <ContainerText>on-line</ContainerText>
              </StyledColumnContainer>
            </RowAwardContainer>
          </AwardContainer>

          <AwardContainer>
            <RowAwardContainer>
              <ImageColumnContainer>
                <ImageContainer>
                  <Image source={sebraeImage} />
                </ImageContainer>
              </ImageColumnContainer>
              <CoinsButton>
                <MaterialDesignIcon
                  name="currency-usd-circle"
                  color="#6D5C01"
                  size={21}
                />
                <CoinsButtonText> 1000</CoinsButtonText>
              </CoinsButton>
              <IconContainer>
                <FontAwesome5Icon name="award" size={32} color="#787878" />
              </IconContainer>
              <StyledColumnContainer>
                <RowAwardContainer>
                  <ContainerTitle>Inovação</ContainerTitle>
                </RowAwardContainer>
                <ContainerText>50% de bolsa</ContainerText>
                <ContainerText>Duração: 3 meses</ContainerText>
                <ContainerText>on-line</ContainerText>
              </StyledColumnContainer>
            </RowAwardContainer>
          </AwardContainer>

          <AwardContainer>
            <RowAwardContainer>
              <ImageColumnContainer>
                <ImageContainer>
                  <Image source={sebraeImage} />
                </ImageContainer>
              </ImageColumnContainer>
              <CoinsButton>
                <MaterialDesignIcon
                  name="currency-usd-circle"
                  color="#6D5C01"
                  size={21}
                />
                <CoinsButtonText> 1000</CoinsButtonText>
              </CoinsButton>
              <StyledColumnContainer>
                <RowAwardContainer>
                  <ContainerTitle>Inglês</ContainerTitle>
                </RowAwardContainer>
                <ContainerText>100% de bolsa</ContainerText>
                <ContainerText>Duração: 3 meses</ContainerText>
                <ContainerText>on-line</ContainerText>
              </StyledColumnContainer>
            </RowAwardContainer>
          </AwardContainer>

          <AwardContainer>
            <RowAwardContainer>
              <ImageColumnContainer>
                <ImageContainer>
                  <Image source={sebraeImage} />
                </ImageContainer>
              </ImageColumnContainer>
              <CoinsButton>
                <MaterialDesignIcon
                  name="currency-usd-circle"
                  color="#6D5C01"
                  size={21}
                />
                <CoinsButtonText> 1000</CoinsButtonText>
              </CoinsButton>

              <StyledColumnContainer>
                <RowAwardContainer>
                  <ContainerTitle>E-book de design</ContainerTitle>
                </RowAwardContainer>
                <ContainerText>100% de bolsa</ContainerText>
                <ContainerText>Duração: 2 meses</ContainerText>
                <ContainerText>on-line</ContainerText>
              </StyledColumnContainer>
            </RowAwardContainer>
          </AwardContainer>
        </ScrollView>
      </FormContainer>
    </Container>
  );
};

export default Awards;
