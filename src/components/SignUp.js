import React from 'react'
import { StyleSheet, View,Text, ScrollView} from 'react-native';
import {ThemeProvider,Button,Input,Image,Form} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { useState } from "react";
import firebase from "../../firebase";


const SignUp = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
    password: ""
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("Student").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
          password: state.password
        });
        alert('Your account has been submited');
        props.navigation.navigate("Home");
         
      } catch (error) {
        console.log(error)
      }
    }
  };



        return(
            
            <ThemeProvider theme={theme}>
            <ScrollView style={styles.container}>
         
                <View style={{alignItems: 'center',margin: 10}}>
                <Icon
                       name='user-circle'
                       size={150}
                       color='#0B3861'
                      
                    />
                
                </View>
              
               
                <Input
                leftIcon={
                    <Icon
                       name='user-o'
                       size={20}
                       color='#0085E6'
                    />
                    
                }
                placeholder={'John Pual'}
                onChangeText={(value) => handleChangeText(value, "name")}
                value={state.name}/>
               
               <Input
                leftIcon={
                    <Icon
                       name='envelope-o'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'micheal1234@gmail.com'}
                onChangeText={(value) => handleChangeText(value, "email")}
                value={state.email}/>
                
                <Input
                leftIcon={
                    <Icon
                       name='unlock-alt'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'********'}
                onChangeText={(value) => handleChangeText(value, "password")}
               value={state.password}/>
                <Input
                leftIcon={
                    <Icon
                       name='mobile'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'0801001000'}
                onChangeText={(value) => handleChangeText(value, "phone")}
                value={state.phone}/>
                <Button
                onPress={() => saveNewUser()}
                icon={
                    <Icon
                       name='check'
                       size={20}
                       color='#FFF'
                    />
                }
                
                buttonstyle={{
                    backgroundColor: "#0B3861",
                    height: 50,
                    fontSize: 20
                }
                }
                title="Sign Up"
         
              />
         
        
           </ScrollView>
            </ThemeProvider>
        
          
        )
            }
    
        

const theme ={
    Button:{
        raised: true
    }
}

const styles=StyleSheet.create({

    container:
    {
        flex:1,
        padding:35,
        backgroundColor: '#EFF8FB'
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center'
    }
});

export default SignUp;