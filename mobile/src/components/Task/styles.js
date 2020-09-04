import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 110px;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const StyledContainer = styled.View`
  border-radius: 10px;
  background-color: #fff;
  width: 99%;
  height: 98px;
  flex-direction: row;
`;

export const StyledBoldText = styled.Text`
  font-family: 'Ubuntu-Bold';
  color: #787878;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.3px;
`;

export const StyledText = styled.Text`
  font-family: 'Ubuntu-Regular';
  color: #787878;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.3px;
`;

export const StyledLittleText = styled.Text`
  font-family: 'Ubuntu-Regular';
  color: #787878;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.3px;
`;

export const TimeContainer = styled.View`
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 19%;
  height: 100%;
  border-right-width: 1px;
  border-right-color: #ccc;
`;

export const TextContainer = styled.View`
  margin-left: 10px;
  margin-top: 13px;
  width: 63%;
  height: 100%;
`;

export const CheckedContainer = styled.View`
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 14%;
  height: 100%;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #425195;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  align-self: flex-end;
  z-index: 2;
`;
