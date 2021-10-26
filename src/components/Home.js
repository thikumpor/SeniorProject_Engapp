import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native-elements';



function Home ({navigation}) {
    
        return(
            
            <View style={styles.container}>
            <Text style={{fontSize: 50,color: '#154360',margin: 10}}>Engtopia</Text>
              <View style={styles.bottom}>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                        <Button
                    icon={
                    <Icon
                       name='user'
                       size={60}
                       color='#FFFF'
                       marginLeft= {10}
                    />
                }
                title='Profile'
                titleStyle={{
                    fontSize: 25,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#154360",
                    height: 130,
                }}
                
                onPress={() =>navigation.navigate('Profile')}
                />
                  
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                        <Button
                    icon={
                    <Icon
                       name='sort-alpha-asc'
                       size={60}
                       color='#FFFF'
                       marginLeft= {10}
                    />
                }
                title='Chapter'
                titleStyle={{
                    fontSize: 25,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#154360",
                    height: 130,
                }}
                
                onPress={() =>navigation.navigate('Chapter')}
                />
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                        <Button
                    icon={
                    <Icon
                       name='delicious'
                       size={60}
                       color='#FFFF'
                       marginLeft= {10}
                    />
                }
                title='Test'
                titleStyle={{
                    fontSize: 25,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#154360",
                    height: 130,
                }}
                
                onPress={() =>navigation.navigate('Test')}
                />
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                        <Button
                    icon={
                    <Icon
                       name='bar-chart-o'
                       size={60}
                       color='#FFFF'
                       marginLeft= {10}
                    />
                }
                title='Score'
                titleStyle={{
                    fontSize: 25,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#154360",
                    height: 130,
                }}
                
                onPress={() =>navigation.navigate('Score')}
                />
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                        <Button
                    icon={
                    <Icon
                       name='share-square-o'
                       size={60}
                       color='#FFFF'
                       marginLeft= {10}
                    />
                }
                title='Logout'
                titleStyle={{
                    fontSize: 25,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#154360",
                    height: 130,
                }}
                
                onPress={() =>navigation.navigate('Main')}
                />
                        </View>
                    </View>
                    
                </View>
            

          </View>
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
        padding:10,
        backgroundColor: '#EFF8FB',
        alignItems: 'center'
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center'
    },
    bottom:{
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,


    },
    bottomItem: {
        width: '50%',
        height: '50%',
        padding: 10,

    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: '#154360'
    }
});

export default Home;