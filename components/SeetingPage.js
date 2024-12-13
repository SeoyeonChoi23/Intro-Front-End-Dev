import React from 'react'; 
import {View, Text, Button, StyleSheet} from 'react-native';

const SettingPage = ( {navigation }) => { 

    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
                This is Setting Page.
            </Text> 
            <Button 
                title="Go to Chat Box"
            
                onPress={() => navigation.navigate('ChatPage')} // take to chatpage 
            />
        </View>


    ); 

}; 

const styles = StyleSheet.create({ 

    container : { 
        flex : 1, 
        justifyContent : 'center', 
        alignItems : 'ceneter', 
    }, 
    text : { 
        fontSize : 20, 
        alignItems : 'center',
        paddingLeft : '100',
    }, 

}); 

export default SettingPage; 

