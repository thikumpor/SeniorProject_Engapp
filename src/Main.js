import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';

const Main = ({ navigation }) => {
    return ( <View style = { styles.container } >
        <View style={styles.box}>
        <Image source = { require('./image/logoEng.png') }style = {styles.Image}/>
        <Text style={styles.text}>
        " Welcome to Engtopia
        Enjoy to learning English " </Text> 
        <View style = { styles.header } >
            <TouchableOpacity  onPress={() =>navigation.navigate('Login')}>
            <View style = {styles.button}>

            <Text style = { styles.buttonText } > Sign in </Text> 
            </View >
            </TouchableOpacity> 
            <TouchableOpacity onPress={() =>navigation.navigate('SignUp')}>
        <View style ={styles.button2}>
        <Text style = {styles.buttonText2}>Sign up</Text> 
        </View >
        </TouchableOpacity> 
        </View >
        </View>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF8FB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        height: 350, 
        width: 350 ,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginTop: '10%'
    }
    ,
      text: { 
          textAlign: 'center', 
          fontSize: 20, 
          color: '#2874A6',
          justifyContent: 'center',
          marginLeft: 5,
          marginRight: 5},
    button: {
        width: 350,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#154360',
        borderWidth: 1,
        backgroundColor: '#154360',
        textAlign: 'center',
        marginTop: 10

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 20,
        alignItems: 'center'

    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 2
    },
    buttonText2: {
        color: '#154360',
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    },
    button2: {
        marginBottom: 20,
                width: 350,
                height: 50,
                alignItems: 'center',
                borderRadius: 5,
                borderColor: '#154360',
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
                margin: 20
    }
});
export default Main;