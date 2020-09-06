import styled from 'styled-components';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 0px 0px 0px;
`;

export const StyledRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 00px 30px;
  margin-bottom: 10px;
`;

export const CoinsButton = styled.TouchableOpacity`
  width: 20%;
  height: 40px;
  background-color: #fbd300;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  flex-direction: row;
`;

export const CoinsButtonText = styled.Text`
  color: #6d5c01;
  font-size: 14px;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
`;

export const NewPostButton = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background-color: #3875bc;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: row;
`;

export const NewPostButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
`;
