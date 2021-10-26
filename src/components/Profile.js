import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import { ListItem,Badge } from 'react-native-elements/dist/list/ListItem';


class Profile extends Component {
    constructor() {
        super();
    }

    render(){
        return(
          <ScrollView style={styles.container}>
              <View>
                  <Text style={{fontSize: 50,color: '#154360',margin: 10,alignItems: 'center'}}>Profile</Text>
              </View>
          </ScrollView>
        )
    }
    
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
        backgroundColor: '#EFF8FB',
        
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

export default Profile;