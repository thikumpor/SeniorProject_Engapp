import React, { Component } from 'react'
import { StyleSheet, View,Text, ScrollView} from 'react-native';
import {ThemeProvider,Button,Input,Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) =>{
        return(
            <ThemeProvider theme={theme}>
                <ScrollView style={styles.container}>
                <View style={{alignItems: 'center',margin: 20}}>
                <Icon
                       name='language'
                       size={200}
                       color='#0B3861'
                      
                    />
                
                </View>
                <Input
                leftIcon={
                    <Icon
                       name='envelope-o'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Email'}
                />
                <Input
                leftIcon={
                    <Icon
                       name='unlock-alt'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Password'}
                />
                <Button
                    icon={
                    <Icon
                       name='sign-in'
                       size={20}
                       color='#FFF'
                    />
                }
                title='   Sign In'
                buttonStyle={{
                    backgroundColor: "#0B3861",
                    height: 50,
                    fontSize: 20
                }
                }
                onPress={() =>navigation.navigate('Home')}
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

export default Login;