import React from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../components/context'

const LoginScreen = ({navigation}) => {

    const { signIn } = React.useContext(AuthContext);

    const [data, setData] = React.useState({
        username: '',
        password: '',
    });
    // Function to handle user typing the user name
    // A check for at least 4 chars in done
    // If all the checks are passed the value the user types is passed as username
    
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
               // check_textInputChange: true,
              //  isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
               // check_textInputChange: false,
                //isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {
        signIn(true);
    }

        return(
            <View style={Styles.container}>
                <View style={Styles.formWrapper}>
                    <View style={Styles.formRow}>
                        <TextInput style={Styles.TextInput}
                        placeholder="Enter username"
                        placeholderTextColor="black"
                        onChangeText={(val) => textInputChange(val)}
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
                        onPress={() => {loginHandle( data.username, data.password )}}
                    >
                        <Text style={Styles.signinTxt}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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