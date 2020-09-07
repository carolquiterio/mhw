import React, { useState } from 'react';
import {View, Image} from 'react-native';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';

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
    ImageIcon,
  } from './styles';
  
import IoniIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export default function Post(props) {
  const [liked, setLiked] = useState(false);

  async function handleLike(post_id, likes_atual){
    // const response = await api.post(`/posts/${post_id}/likes`);
  
    setLiked(true);
  }

  return (
    <PostContainer>
          <RowContaner>
            <ImageContainer>
              <ImageIcon source={{ uri: props.foto }} />
            </ImageContainer>
            <StyTitleContainer>
              <NameText>{props.nome}</NameText>
            <TitleText>{props.titulo}</TitleText>
            </StyTitleContainer>
          </RowContaner>
          <PostDescription>
            {props.descricao}
          </PostDescription>
          <RowContaner>
            <MaterialDesignIcon name="heart" color="#D50303" size={22} />
            <PostDetails> {props.likes}{'     '}</PostDetails>
            <MaterialDesignIcon
              name="comment-processing"
              color="#425195"
              size={22}
            />
            <PostDetails> 1</PostDetails>
          </RowContaner>
          <RowContanerBorder>
            <MaterialDesignIcon
              name="heart-outline"
              color={liked?"red":"#5D5D5D"}
              size={22}
              onPress={() => handleLike(props.post_id, props.likes)}
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