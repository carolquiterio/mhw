import React from 'react';
import {ScrollView, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  CoinsButton,
  CoinsButtonText,
  NewPostButton,
  NewPostButtonText,
  StyledRowContainer,
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

import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import profileImage from '../../../assets/images/Profile.png';

const Community = () => {
  const navigation = useNavigation();

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <PostContainer>
          <RowContaner>
            <ImageContainer>
              <Image source={profileImage} />
            </ImageContainer>
            <StyTitleContainer>
              <NameText>Carla Souza</NameText>
              <TitleText>Como eu posso abrir um MEI?</TitleText>
            </StyTitleContainer>
          </RowContaner>
          <PostDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            finibus nibh. Nulla pellentesque pellentesque dolor quis congue.
            Nullam egestas turpis ante, id lacinia nisl pellentesque a. Proin
            viverra lacus sem, et posuere massa eleifend ut. Quisque ut magna
            diam. Integer viverra enim sit amet aliquet tristique.
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
        <PostContainer>
          <RowContaner>
            <ImageContainer>
              <Image source={profileImage} />
            </ImageContainer>
            <StyTitleContainer>
              <NameText>Carla Souza</NameText>
              <TitleText>Como eu posso abrir um MEI?</TitleText>
            </StyTitleContainer>
          </RowContaner>
          <PostDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            finibus nibh. Nulla pellentesque pellentesque dolor quis congue.
            Nullam egestas turpis ante, id lacinia nisl pellentesque a. Proin
            viverra lacus sem, et posuere massa eleifend ut. Quisque ut magna
            diam. Integer viverra enim sit amet aliquet tristique.
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
        <PostContainer>
          <RowContaner>
            <ImageContainer>
              <Image source={profileImage} />
            </ImageContainer>
            <StyTitleContainer>
              <NameText>Carla Souza</NameText>
              <TitleText>Como eu posso abrir um MEI?</TitleText>
            </StyTitleContainer>
          </RowContaner>
          <PostDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            finibus nibh. Nulla pellentesque pellentesque dolor quis congue.
            Nullam egestas turpis ante, id lacinia nisl pellentesque a. Proin
            viverra lacus sem, et posuere massa eleifend ut. Quisque ut magna
            diam. Integer viverra enim sit amet aliquet tristique.
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
      </ScrollView>
    </Container>
  );
};

export default Community;
