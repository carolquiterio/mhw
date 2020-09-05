import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Community from './src/pages/Community';
import Profile from './src/pages/Profile';
import Tasks from './src/pages/Tasks';
import NewTask from './src/pages/NewTask';

import {StyleSheet, View, StatusBar} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Tasks':
                  iconName = focused ? 'pencil' : 'pencil-outline';
                  break;
                case 'Profile':
                  iconName = focused ? 'account' : 'account-outline';
                  break;
                case 'Community':
                  iconName = focused
                    ? 'comment-processing'
                    : 'comment-processing-outline';
                  break;
                default:
                  iconName = 'circle';
                  break;
              }
              // You can return any component that you like here
              return <MaterialIcon name={iconName} size={28} color="#8a8a8a" />;
            },
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
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
            component={Community}
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

const TaskStack = createStackNavigator();

function TaskStackScreen() {
  return (
    <TaskStack.Navigator screenOptions={{headerShown: false}}>
      <TaskStack.Screen name="Tasks" component={Tasks} />
      <TaskStack.Screen
        name="NewTask"
        component={NewTask}
        options={{
          headerStyle: {
            backgroundColor: '#f5eef5',
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 2,
            elevation: 0,
          },
        }}
      />
    </TaskStack.Navigator>
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

/**<Tab.Screen
          name="NewTask"
          component={NewTask}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: () => (
              <View style={styles.iconTabRound}>
                <MaterialIcon name="plus" size={38} color="#fff" />
              </View>
            ),
          }}
        /> */

/**const CameraStack = createStackNavigator();

function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTitle: props => MenuFunction(),
          headerStyle: {
            backgroundColor: '#f5eef5',
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 2,
            elevation: 0,
          },
        }}
      />
    </CameraStack.Navigator>
  );
}
 */
