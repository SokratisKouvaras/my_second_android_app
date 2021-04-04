import React from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';





class LoginScreen extends React.Component{
    render(){



        return(
            <View style={Styles.container}>
                <View style={Styles.formWrapper}>
                    <View style={Styles.formRow}>
                        <TextInput style={Styles.TextInput}
                        placeholder="Enter username"
                        placeholderTextColor="black"
                        />
                    </View>
                    <View style={Styles.formRow}>
                        <TextInput style={Styles.TextInput}
                        placeholder="Enter password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                        style={Styles.signinBtn}
                        
                    >
                        <Text style={Styles.signinTxt}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
}

}
export default LoginScreen;

const Styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
    justifyContent:'center'    
},
formWrapper:{
    width:'90%'
},
formRow:{
    marginBottom:10
},
TextInput:{
    height:40,
    backgroundColor:'green',
    paddingHorizontal:10
},
signinBtn:{
    backgroundColor:'blue',
    paddingVertical:10,
    
},
signinTxt:{
    textAlign:'center',
    color:'white',
    fontSize:18,
    fontWeight:'bold'
}
})