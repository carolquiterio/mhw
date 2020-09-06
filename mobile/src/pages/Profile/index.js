import React, {useState} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  StyledRowContainer,
  ImageContainer,
  StyledAction,
  StyledTitle,
  StyledColumnContainer,
  StyledActionBig,
  StyledFirstRowContainer,
} from './styles';

import profileImage from '../../../assets/images/Profile2.png';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Profile = () => {
  const navigation = useNavigation();

  function handleHelpPress() {
    Linking.openURL('tel:188');
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
            <Text style={styles.modalText}>Preciso de ajuda!</Text>
            <StyledFirstRowContainer>
              <FeatherIcon name="phone-call" size={20} color="#B83B5E" />
              <Text style={styles.modalDescription} onPress={handleHelpPress}>
                Ligar para o Centro de Valorização da Vida.
              </Text>
            </StyledFirstRowContainer>
            <StyledFirstRowContainer>
              <FeatherIcon name="phone-call" size={20} color="#B83B5E" />
              <Text style={styles.modalDescription}>
                Ligar para a Central de Atendimento à Mulher em Situação de
                Violência
              </Text>
            </StyledFirstRowContainer>
            <StyledFirstRowContainer>
              <FeatherIcon name="phone-call" size={20} color="#B83B5E" />
              <Text style={styles.modalDescription}>
                Ligar para a Delegacia da Mulher
              </Text>
            </StyledFirstRowContainer>
            
            <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible);
              }}>
            <Text
              style={{
                ...styles.modalText,
                color: '#5d5d5d',
                fontFamily: 'Ubuntu-Medium',
              }}>
              {' '}
              Agora não >
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StyledFirstRowContainer>
        <ImageContainer>
          <Image source={profileImage} />
        </ImageContainer>
        <StyledColumnContainer>
          <StyledTitle>Isadora Silva</StyledTitle>
          <StyledAction>Desde 2020</StyledAction>
        </StyledColumnContainer>
      </StyledFirstRowContainer>
      <StyledRowContainer>
        <IoniIcon name="settings-outline" color="#787878" size={25} />
        <StyledActionBig>{'  '} Configurações</StyledActionBig>
      </StyledRowContainer>
      <StyledRowContainer>
        <MaterialIcon name="pencil-outline" color="#787878" size={25} />
        <StyledActionBig>{'  '} Tarefas</StyledActionBig>
      </StyledRowContainer>
      <StyledRowContainer>
        <FontAwesomeIcon name="commenting-o" color="#787878" size={25} />
        <StyledActionBig>{'  '} Comunidade</StyledActionBig>
      </StyledRowContainer>
      
      <TouchableOpacity onPress={() => {
            setModalVisible(true);
          }}>
      <StyledRowContainer>
        <IoniIcon
          name="help-buoy-outline"
          color="#787878"
          size={25}
          
          />

        <StyledActionBig>{'  '} Preciso de ajuda!</StyledActionBig>
      </StyledRowContainer>
      </TouchableOpacity>

      <StyledRowContainer>
        <IoniIcon name="log-out-outline" color="#787878" size={25} />
        <StyledActionBig>{'  '} Sair</StyledActionBig>
      </StyledRowContainer>
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
    paddingRight: 35,
    paddingTop: 30,
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
    backgroundColor: '#787878',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 30,
    marginTop: 8,
  },

  textStyle: {
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
  },
  modalText: {
    fontSize: 18,
    color: '#231F20',
    fontFamily: 'Ubuntu-Bold',
    paddingBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#787878',
    fontFamily: 'Ubuntu-Regular',
    marginLeft: 10,
  },
});

export default Profile;
