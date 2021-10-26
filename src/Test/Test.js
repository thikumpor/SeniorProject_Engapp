import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function Test ({navigation}) {
    
        return(
           
            <ScrollView style={styles.container}>
                 <View style={{alignItems: 'center',margin: 10}}>
                 <Text style={{fontSize: 30 ,color: '#0B3861' }}>Test</Text>
                  <Icon
                       name='delicious'
                       size={200}
                       color='#214B61'
                      
                    />
                    </View>
                    <Button
                    icon={
                    <Icon
                       name='pencil'
                       size={30}
                       color='#FFF'
                    />
                }
                title='   Test'
                buttonStyle={{
                    backgroundColor: "#214B61",
                    height: 50,
                    fontSize: 30
                }
                }
               
                />

          </ScrollView>
          
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

export default Test;