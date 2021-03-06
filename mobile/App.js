import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Community from './src/pages/Community';
import Profile from './src/pages/Profile';
import Tasks from './src/pages/Tasks';
import NewTask from './src/pages/NewTask';
import CategoryCommunity from './src/pages/CategoryCommunity';
import Coins from './src/pages/Coins';
import NewPost from './src/pages/NewPost';
import Ranking from './src/pages/Ranking';
import Awards from './src/pages/Awards';

import {StyleSheet, View, StatusBar} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />

        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  color = focused ? '#B83B5E' : '#8a8a8a';
                  break;
                case 'Tasks':
                  iconName = focused ? 'pencil' : 'pencil-outline';
                  color = focused ? '#B83B5E' : '#8a8a8a';
                  break;
                case 'Profile':
                  iconName = focused ? 'account' : 'account-outline';
                  color = focused ? '#B83B5E' : '#8a8a8a';
                  break;
                case 'Community':
                  iconName = focused ? 'commenting' : 'commenting-o';
                  color = focused ? '#B83B5E' : '#8a8a8a';
                  break;
                default:
                  iconName = 'circle';
                  color = focused ? '#B83B5E' : '#8a8a8a';
                  break;
              }
              if (route.name == 'Community')
                return (
                  <FontAwesomeIcon name={iconName} size={26} color={color} />
                );

              return <MaterialIcon name={iconName} size={28} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#B83B5E',
            inactiveTintColor: '#8a8a8a',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Inìcio',
            }}
          />
          <Tab.Screen
            name="Tasks"
            component={TaskStackScreen}
            options={{
              tabBarLabel: 'Tarefas',
            }}
          />

          <Tab.Screen
            name="Community"
            component={CommunityStackScreen}
            options={{
              tabBarLabel: 'Comunidade',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Perfil',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const HomeStack = createStackNavigator();

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="CategoryCommunity"
        component={CategoryCommunity}
      />
      <HomeStack.Screen name="Coins" component={Coins} />
      <HomeStack.Screen name="Ranking" component={Ranking} />
      <HomeStack.Screen name="Awards" component={Awards} />
    </HomeStack.Navigator>
  );
}

const TaskStack = createStackNavigator();

function TaskStackScreen() {
  return (
    <TaskStack.Navigator screenOptions={{headerShown: false}}>
      <TaskStack.Screen name="Tasks" component={Tasks} />
      <TaskStack.Screen name="NewTask" component={NewTask} />
    </TaskStack.Navigator>
  );
}

const CommunityStack = createStackNavigator();

function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator screenOptions={{headerShown: false}}>
      <CommunityStack.Screen name="Community" component={Community} />
      <CommunityStack.Screen name="Coins" component={Coins} />
      <CommunityStack.Screen name="NewPost" component={NewPost} />
      <HomeStack.Screen name="Awards" component={Awards} />
    </CommunityStack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#08DDB4',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: '#21A29A',
  },
});
