import React, {useState} from 'react';
import {View} from 'react-native';
import api from '../../services/api';

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
  const [feito, setFeito] = useState(props.feito);

  async function handleCheck(activity_id) {
    const response = await api.put(`/activities/${activity_id}`, {
      feito: true,
    });

    if (!feito) setFeito(true);
    else setFeito(false);
  }

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
          <StyledText> </StyledText>
          <StyledText>{props.usuario_id}</StyledText>
        </TextContainer>
        <CheckedContainer onPress={() => handleCheck(props.atividade_id)}>
          <IoniIcon
            name={feito ? 'checkmark-circle' : 'checkmark-circle-outline'}
            color={feito == false ? '#bbb' : 'green'}
            size={42}
          />
        </CheckedContainer>
      </StyledContainer>
    </Container>
  );
}
/*checkmark-circle */
