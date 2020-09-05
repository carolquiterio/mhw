import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 40px 30px 30px 40px;
  background-color: #f5f5f5;
`;

export const StyledFirstRowContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledRowContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 14px;
`;

export const StyledTitle = styled.Text`
  align-self: center;
  color: #363636;
  font-size: 19px;
  font-family: 'Ubuntu-Bold';
  margin-left: 20px;
  margin-bottom: 8px;
`;
export const StyledAction = styled.Text`
  align-self: center;
  color: #787878;
  font-size: 16px;
  font-family: 'Ubuntu-Regular';
`;

export const StyledColumnContainer = styled.View`
  flex-direction: column;
`;

export const StyledActionBig = styled.Text`
  align-self: center;
  color: #787878;
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
`;
