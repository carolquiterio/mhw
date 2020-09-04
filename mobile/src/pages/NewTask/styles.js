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
  font-family: 'Ubuntu-Regular';
  letter-spacing: -0.333333px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 30px;
`;

export const FormContainer = styled.View`
  background-color: #fff;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 34px;
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
