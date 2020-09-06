import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 0px 30px;
  background-color: #f5f5f5;
  justify-content: center;
`;

export const NewTaskButton = styled.TouchableOpacity`
  background-color: #3875BC;
  width: 40%;
  height: 40px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border-radius: 20px;
  flex-direction: row;
`;

export const DayContainerActive = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #6a2c70;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px;
  margin-right: 10px;
  width: 55px;
  height: 68px;
`;

export const DayContainer = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #BEBEBE;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px;
  margin-right: 10px;
  width: 55px;
  height: 68px;
`;

export const DayContainerText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu-Regular';
  letter-spacing: -0.3px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.3px;
  font-size: 14px;
`;

export const BoldDayContainerText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu-Bold';
  letter-spacing: -0.3px;
  font-size: 16px;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  color: #363636;
  font-family: 'Ubuntu-Medium';
  letter-spacing: -0.333333px;
  margin-top: 13px;
`;

export const TasksContainer = styled.View``;
