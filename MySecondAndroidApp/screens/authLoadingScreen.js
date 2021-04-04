import React from 'react';
import {View,Text,  StyleSheet, ActivityIndicator} from 'react-native';

class AuthLoadingScreen extends React.Component{
    render(){
        return(
            <View style={[Styles.container, Styles.horizontal]}>
                <Text>
                    hello
                </Text>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default AuthLoadingScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }

})