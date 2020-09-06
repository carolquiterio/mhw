import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #6a2c70;
`;

export const StyledRowContainer = styled.TouchableOpacity`
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

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 14px;
`;

export const FormContainer = styled.View`
  background-color: #fff;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 40px 40px 40px 40px;
  margin-top: -20px;
`;

export const CoinsButton = styled.TouchableOpacity`
  width: 34%;
  height: 40px;
  background-color: #fbd300;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  margin-top: 5px;
  z-index: 1;
`;

export const CoinsButtonText = styled.Text`
  color: #6d5c01;
  font-size: 14px;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
`;

export const StyledTitle = styled.Text`
  align-self: center;
  color: #5d5d5d;
  font-size: 19px;
  font-family: 'Ubuntu-Bold';
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ColumnContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
`;

export const StyledAction = styled.Text`
  align-self: center;
  color: #5d5d5d;
  font-size: 16px;
  font-family: 'Ubuntu-Regular';
`;

export const StyledActionPink = styled.Text`
  align-self: center;
  color: #b83b5e;
  font-size: 16px;
  font-family: 'Ubuntu-Medium';
`;

export const IconContainer = styled.View`
  background-color: #ffb0c6;
  width: 42px;
  height: 42px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;

export const StyledActionCoins = styled.Text`
  align-self: center;
  color: #5d5d5d;
  font-size: 16px;
  font-family: 'Ubuntu-Regular';
  margin-top: 30px;
  padding: 10px 30px 1px 30px;
  text-align: center;
`;

export const MimoButton = styled.TouchableOpacity`
  background-color: #03a700;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 40px;
  flex-direction: row;
  border-radius: 30px;
  align-self: center;
  margin-top: 5px;
`;

export const MimoButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Ubuntu-Medium';
`;
