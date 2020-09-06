import React from 'react';
import {View, Image} from 'react-native';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import profileImage from '../../../assets/images/Profile.png';

import {
    PostContainer,
    RowContaner,
    NameText,
    TitleText,
    StyTitleContainer,
    PostDescription,
    PostDetails,
    RowContanerBorder,
    PostDetailsBold,
    ImageContainer,
  } from './styles';
  
import IoniIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export default function Post(props) {
  return (
    <PostContainer>
          <RowContaner>
            <ImageContainer>
              <Image source={profileImage} />
            </ImageContainer>
            <StyTitleContainer>
              <NameText>Carla Souza</NameText>
            <TitleText>{props.titulo}</TitleText>
            </StyTitleContainer>
          </RowContaner>
          <PostDescription>
            {props.descricao}
          </PostDescription>
          <RowContaner>
            <MaterialDesignIcon name="heart" color="#D50303" size={22} />
            <PostDetails> 15{'     '}</PostDetails>
            <MaterialDesignIcon
              name="comment-processing"
              color="#425195"
              size={22}
            />
            <PostDetails> 5</PostDetails>
          </RowContaner>
          <RowContanerBorder>
            <MaterialDesignIcon
              name="heart-outline"
              color="#5D5D5D"
              size={22}
            />
            <PostDetailsBold>Amei!{'       '}</PostDetailsBold>
            <MaterialDesignIcon
              name="comment-processing-outline"
              color="#5D5D5D"
              size={22}
            />
            <PostDetailsBold> Comentar</PostDetailsBold>
          </RowContanerBorder>
        </PostContainer>
  );
}