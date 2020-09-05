import styled from 'styled-components';

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
  padding: 0px 39px 36px 39px;
`;

export const StyledInput = styled.TextInput`
  width: 90%;
  padding-left: 21px;
`;

export const InputContainer = styled.View`
  width: 100%;
  border-color: #ccc;
  border-radius: 5px;
  border-width: 1px;
  margin-top: 6px;
`;

export const ReadyButton = styled.TouchableOpacity`
  background-color: #425195;
  width: 64%;
  height: 40px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 30px;
  border-radius: 20px;
`;

export const ReadyButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Ubuntu-Medium';
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 14px;
`;
