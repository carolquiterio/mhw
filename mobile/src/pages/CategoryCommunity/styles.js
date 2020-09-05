import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 34px;
  background-color: #6a2c70;
`;

export const StyledRowContainer = styled.View`
  flex-direction: row;
`;

export const StyledGoBack = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Ubuntu-Regular';
  letter-spacing: -0.333333px;
`;

export const CoinsButton = styled.TouchableOpacity`
  width: 38%;
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

export const ImageContainer = styled.View`
  justify-content: center;
  padding-top: 300px;
  align-items: center;
`;
