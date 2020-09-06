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
  padding: 0px 34px 34px 34px;
`;

export const StyledInput = styled.TextInput`
  width: 90%;
  height: 40px;
  padding-left: 21px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: #ccc;
  border-radius: 5px;
  border-width: 1px;
  padding-right: 13px;
  margin-top: 6px;
`;

export const StyledBell = styled.View`
  background-color: #ffdde7;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const RememberRowContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  height: 40px;
  width: 100%;
  align-items: center;
`;

export const StyledRememberText = styled.Text`
  font-size: 18px;
  color: #5d5d5d;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
  margin-left: 20px;
`;

export const StyledSwitch = styled.Switch`
  margin-left: 95px;
`;

export const CategoryButtonContainer = styled.View`
  width: 42%;
  height: 38px;
  background-color: #ffd4ba;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ReadyButton = styled.TouchableOpacity`
  background-color: #425195;
  width: 64%;
  height: 49px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 30px;
  border-radius: 20px;
`;

export const ReadyButtonText = styled.Text`
  color: #fff;
  font-size: 19px;
  font-family: 'Ubuntu-Regular';
`;

export const CategoryIconContainer = styled.View`
  background-color: #fc7f33;
  width: 28px;
  height: 28px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const CategoryTitleIcon = styled.Text`
  color: #fc7f33;
  font-size: 16px;
  font-family: 'Ubuntu-Medium';
  margin-left: 10px;
`;
