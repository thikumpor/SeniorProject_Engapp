import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function Score ({navigation}) {
    
        return(
           
            <ScrollView style={styles.container}>
                
                 <View style={{alignItems: 'center',margin: 10}}>
                 <Text style={{fontSize: 30 ,color: '#0B3861' }}>Score</Text>
                  <Icon
                       name='bar-chart-o'
                       size={200}
                       color='#0B3861'
                      
                    />
                    </View>
            
            
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

export default Score;