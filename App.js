import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main'
import Login from './src/components/Login'
import SignUp from './src/components/SignUp'
import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Learning from './src/Learning/Learning'
import Learning2 from './src/Learning/Learning2'
import Learning3 from './src/Learning/Learning3'
import Score from './src/Score/Score'
import Chapter from './src/components/Chapter'
import Test from './src/Test/Test'



const Stack = createNativeStackNavigator();


export default function App() {
    return ( 
        <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen  name="Main"  component={Main}/>
          <Stack.Screen  name="Login"  component={Login}/>
          <Stack.Screen  name="SignUp"  component={SignUp}/>
          <Stack.Screen  name="Home"  component={Home}/>
          <Stack.Screen  name="Profile"  component={Profile}/>
          <Stack.Screen  name="Learning"  component={Learning}/>
          <Stack.Screen  name="Learning2"  component={Learning2}/>
          <Stack.Screen  name="Learning3"  component={Learning3}/>
          <Stack.Screen  name="Score"  component={Score}/>
          <Stack.Screen  name="Chapter"  component={Chapter}/>
          <Stack.Screen  name="Test"  component={Test}/>
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
    
    );
}