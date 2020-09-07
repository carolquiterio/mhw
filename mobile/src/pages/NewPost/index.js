import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ReadyButton,
  ReadyButtonText,
  StyledGoBack,
  StyledInput,
  StyledRowContainer,
  StyledText,
  StyledTitle,
  FormContainer,
  InputContainer,
  ImageContainer,
} from './styles';

import like_flatline from '../../../assets/images/like_flatline.png';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const NewPost = () => {
  const navigation = useNavigation();

  function handleGoBackPress() {
    navigation.goBack();
  }

  function handleNotNowPress() {
    navigation.navigate('Community');
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageContainer>
              <Image source={like_flatline} />
            </ImageContainer>
            <Text style={styles.modalText}>Impulsione sua publicação!</Text>
            <Text style={styles.modalDescription}>
              Faça sua publicação alcançar mais pessoas por 3 dias.
            </Text>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#03A700'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Pagar 100 moedas</Text>
            </TouchableHighlight>
            <Text
              onPress={handleNotNowPress}
              style={{
                ...styles.modalText,
                color: '#5d5d5d',
                fontFamily: 'Ubuntu-Medium',
              }}>
              Agora não
            </Text>
          </View>
        </View>
      </Modal>

      <StyledRowContainer>
        <AntDesignIcon
          name="arrowleft"
          size={20}
          color="#fff"
          onPress={handleGoBackPress}
        />
        <StyledGoBack> Voltar</StyledGoBack>
      </StyledRowContainer>
      <StyledTitle>Escreva sua publicação</StyledTitle>

      <FormContainer>
        <StyledText>Título</StyledText>
        <InputContainer>
          <StyledInput placeholder="Ex: Como abrir um MEI"></StyledInput>
        </InputContainer>
        <StyledText>Descrição</StyledText>
        <InputContainer>
          <StyledInput
            textAlignVertical="top"
            multiline
            numberOfLines={8}
            placeholder="Escreva sua publicação aqui"></StyledInput>
        </InputContainer>
        <ReadyButton
          onPress={() => {
            setModalVisible(true);
          }}>
          <ReadyButtonText>Publicar</ReadyButtonText>
        </ReadyButton>
      </FormContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: 350,
    width: '75%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: -10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: '96%',
    height: 40,
    backgroundColor: '#03A700',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 10,
    marginTop: -30,
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
  },
  modalText: {
    fontSize: 18,
    color: '#231F20',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    paddingBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#5D5D5D',
    textAlign: 'center',
    height: '28%',
    fontFamily: 'Ubuntu-Regular',
  },
});

export default NewPost;
