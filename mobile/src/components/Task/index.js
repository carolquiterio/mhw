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

export default function Task(props) {
  return (
    <Container>
      <ShareButton>
        <SimpleLineIcon name="share" color="#fff" size={15} />
      </ShareButton>
      <StyledContainer>
        <TimeContainer>
          <StyledBoldText>{props.horario_inicio}</StyledBoldText>
          <StyledLittleText>{props.horario_fim}</StyledLittleText>
        </TimeContainer>
        <TextContainer>
          <StyledText>{props.titulo}</StyledText>
        </TextContainer>
        <CheckedContainer>
          <IoniIcon name="checkmark-circle-outline" color="#bbb" size={42} />
        </CheckedContainer>
      </StyledContainer>
    </Container>
  );
}
/*checkmark-circle */
