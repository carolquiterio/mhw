import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
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
  align-items: center;
  margin-top: 70px;
`;

export const StyledText = styled.Text`
  color: #fff;
  letter-spacing: -0.333333px;
  font-family: 'Ubuntu-Regular';
  font-size: 16px;
  margin-top: 20px;
`;

export const CategoryContainer = styled.View`
  background-color: #8a4291;
  border-radius: 5px;
  width: 140px;
  height: 80px;
  justify-content: center;
  margin-right: 14px;
  margin-top: 24px;
`;

export const CategoryTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  letter-spacing: -0.333333px;
  font-family: 'Ubuntu-Medium';
  margin-left: 16px;
`;
