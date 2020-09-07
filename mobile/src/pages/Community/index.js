import React, { useState, useEffect } from 'react';
import {ScrollView, Image, FlatList} from 'react-native';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Post from '../../components/Post';

import {
  Container,
  CoinsButton,
  CoinsButtonText,
  NewPostButton,
  NewPostButtonText,
  StyledRowContainer,
} from './styles';

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Community = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  
  async function loadPosts(){
    const response = await api.get('/posts');
    setPosts(response.data);
  }
  
  useEffect(() => {
    loadPosts();
  }, []);

  function handleCoinsPress() {
    navigation.navigate('Coins');
  }

  function handleNewPostPress() {
    navigation.navigate('NewPost');
  }

  return (
    <Container>
      <StyledRowContainer>
        <NewPostButton onPress={handleNewPostPress}>
          <MaterialDesignIcon name="plus" color="#fff" size={19} />
          <NewPostButtonText>{'   '}Novo post</NewPostButtonText>
        </NewPostButton>
        <CoinsButton onPress={handleCoinsPress}>
          <MaterialDesignIcon
            name="currency-usd-circle"
            color="#6D5C01"
            size={23}
          />
          <CoinsButtonText> 20</CoinsButtonText>
        </CoinsButton>
        <MaterialDesignIcon name="bell-ring" color="#757575" size={30} />
      </StyledRowContainer>
      <FlatList 
            data={posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={ post => String(post._id)}
            renderItem={({ item: post }) => (
            <Post post_id={post._id} titulo={post.titulo} descricao={post.descricao} likes={post.likes} nome={post.usuario_id.nome} foto={post.usuario_id.foto_url} />
           )}
        />
    </Container>
  );
};

export default Community;
