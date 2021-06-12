import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class DashboardScreen extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <TouchableOpacity>
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DashboardScreen;

const Styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
    justifyContent:'center'    
}
})