import React from 'react';
import {View} from 'react-native';

import {Container, StyledRowContainer, StyledGoBack} from './styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
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
    </Container>
  );
};

export default CategoryCommunity;
