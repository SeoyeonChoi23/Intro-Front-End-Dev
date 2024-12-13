import React from 'react'; 
import 
{View, Text,StyleSheet, 
        ImageBackground,
        TouchableOpacity, 
} from 'react-native';


//Author : Stella Choi
const HomePage = ( {navigation }) => { 
    // take navigation as parameter value to render it. e.g. if we click different page, we render 
    // pages to move around between different pages. 
    
    
    return (
        <ImageBackground
            source={require('../assets/IT_HomePage.jpeg')}
            style = {styles.background}
            resizeMethod="cover"
        >

        <View style={styles.overlay}> 
            <Text style={styles.text}>
                Design your Home Page Screen.
            </Text> 
            <Text style={styles.text}> @author : Stella Choi</Text>

             {/** create button  */}
          <View style={styles.buttonRow}> 
          <TouchableOpacity
                // provides animation to button. 
                style={styles.button}
                onPress={() => navigation.navigate('ChatPage')} // Navigate to ChatPage
                 // triggers navigation to chatPage/Settingpage when user press button
            >
                <Text style={styles.buttonText}>Go to Chat Box</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SettingPage')} // Navigate to SettingPage
            >
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>

          </View>
           
         </View>

         
        </ImageBackground>


    ); 

}; 

const styles = StyleSheet.create({ 

    background : { 
        flex : 1, 
        justifyContent : 'center', 
        alignItems : 'ceneter', 
        
    }, 
    overlay: {
        backgroundColor : 'rgba(0,0,0, 0.5)', 
        padding : 20, 
        borderRadius :10, 

    }, 

    text : { 
        fontSize : 20, 
        color : 'white',
        // place text in the middle always
        textAlign : 'center', // Horizontally center the text 
       
    },
    button: {
        backgroundColor : '#00BFFF', // Sky Blue
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        marginVertical: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },

}); 

export default HomePage; 

