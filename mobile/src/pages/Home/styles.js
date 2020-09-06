import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #f5f5f5;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  color: #5d5d5d;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
  margin-top: 10px;
`;

export const StyledRedText = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 16px;
  font-weight: 500;
  color: #b83b5e;
  letter-spacing: -0.333333px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const GraficContainer = styled.View`
  padding-bottom: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NewsButton = styled.TouchableOpacity`
  background-color: #b83b5e;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 70%;
  align-self: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
`;
