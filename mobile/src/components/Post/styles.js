import styled from 'styled-components';
import {Image} from 'react-native';

export const PostContainer = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background-color: #fff;
  padding: 0px 26px 26px 26px;
  margin-top: 26px;
`;

export const RowContaner = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const StyTitleContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const NameText = styled.Text`
  color: #5d5d5d;
  font-size: 18px;
  letter-spacing: -0.333333px;
  font-family: 'Ubuntu-Medium';
  margin-bottom: 8px;
`;

export const TitleText = styled.Text`
  color: #6a2c70;
  font-size: 16px;
  letter-spacing: -0.333333px;
  font-family: 'Ubuntu-Medium';
`;

export const PostDescription = styled.Text`
  color: #5d5d5d;
  font-family: 'Ubuntu-Regular';
  font-size: 14px;
  margin-top: 10px;
`;

export const PostDetails = styled.Text`
  color: #5d5d5d;
  font-family: 'Ubuntu-Regular';
  font-size: 14px;
`;

export const RowContanerBorder = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border-top-width: 1px;
  border-top-color: #e9e9e9;
  width: 100%;
  height: 70px;
`;

export const PostDetailsBold = styled.Text`
  color: #5d5d5d;
  font-family: 'Ubuntu-Medium';
  font-size: 16px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;
