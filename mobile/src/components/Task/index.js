import React from 'react';
import {View} from 'react-native';

import {
  StyledContainer,
  ColumnContainer,
  StyledBoldText,
  StyledLittleText,
  StyledText,
  CheckedContainer,
  TimeContainer,
  TextContainer,
  Container,
  ShareButton,
} from './styles';

import IoniIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export default function Task() {
  return (
    <Container>
      <ShareButton>
        <SimpleLineIcon name="share" color="#fff" size={15} />
      </ShareButton>
      <StyledContainer>
        <TimeContainer>
          <StyledBoldText>10:00</StyledBoldText>
          <StyledLittleText>09:50</StyledLittleText>
        </TimeContainer>
        <TextContainer>
          <StyledText>Levar papelada para o Albero</StyledText>
        </TextContainer>
        <CheckedContainer>
          <IoniIcon name="checkmark-circle-outline" color="#bbb" size={40} />
        </CheckedContainer>
      </StyledContainer>
    </Container>
  );
}
