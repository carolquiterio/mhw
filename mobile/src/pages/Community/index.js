import React from 'react';
import {ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Post from '../../components/Post';

import {
  Container,
  CoinsButton,
  CoinsButtonText,
  NewPostButton,
  NewPostButtonText,
  StyledRowContainer,
} from './styles';

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Community = () => {
  const navigation = useNavigation();

  function handleCoinsPress() {
    navigation.navigate('Coins');
  }

  function handleNewPostPress() {
    navigation.navigate('NewPost');
  }

  return (
    <Container>
      <StyledRowContainer>
        <NewPostButton onPress={handleNewPostPress}>
          <MaterialDesignIcon name="plus" color="#fff" size={19} />
          <NewPostButtonText>{'   '}Novo post</NewPostButtonText>
        </NewPostButton>
        <CoinsButton onPress={handleCoinsPress}>
          <MaterialDesignIcon
            name="currency-usd-circle"
            color="#6D5C01"
            size={23}
          />
          <CoinsButtonText> 20</CoinsButtonText>
        </CoinsButton>
        <MaterialDesignIcon name="bell-ring" color="#757575" size={30} />
      </StyledRowContainer>
      <ScrollView showsVerticalScrollIndicator={false}>        
        <Post titulo="Como eu posso abrir um MEI?" descricao="Tenho um pequeno negócio e gostaria de formalizar ele. 
            Como é o processo para começar esse formalização?" />

        <Post titulo="Dicas para empreender?" descricao="Eu pensando em iniciar um restaurante. Quais os primeiros passos?" />
        
        
      </ScrollView>
    </Container>
  );
};

export default Community;
