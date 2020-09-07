import styled from 'styled-components';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #6a2c70;
`;

export const StyledText = styled.Text`
  font-size: 16px;
  color: #5d5d5d;
  font-family: 'Ubuntu-Regular';
  letter-spacing: -0.333333px;
  margin-top: 20px;
`;

export const StyledTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 30px;
`;

export const StyledRowContainer = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-top: 30px;
`;

export const StyledGoBack = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Ubuntu-Regular';
  letter-spacing: -0.333333px;
`;

export const FormContainer = styled.View`
  background-color: #fff;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 36px 30px 36px 30px;
`;

export const AwardContainer = styled.View`
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 21%;
  padding: 20px;
`;

export const RowAwardContainer = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  align-self: center;
  align-items: center;
`;

export const ContainerTitle = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 17px;
  line-height: 18px;
  color: #6a2c70;
  margin-left: 17px;
`;

export const ImageColumnContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110%;
`;

export const ContainerText = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 15px;
  line-height: 18px;
  color: #787878;
  margin-left: 15px;
  margin-top: 8px;
`;

export const StyledColumnContainer = styled.View`
  flex-direction: column;
`;

export const CoinsButton = styled.TouchableOpacity`
  width: -15%;
  height: 25%;
  background-color: #fbd300;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  margin-left: 80%;
`;

export const CoinsButtonText = styled.Text`
  color: #6d5c01;
  font-size: 12px;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
`;

export const IconContainer = styled.View`
  width: -15%;
  height: 25%;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 80%;
  margin-top: 18%;
`;
