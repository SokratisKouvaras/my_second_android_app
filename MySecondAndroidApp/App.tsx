 import React,{useEffect} from 'react';
 // Import screens
 import LoginScreen from './screens/loginScreen';
 import DashboardScreen from './screens/dashboardScreen';
 import AuthLoadingScreen from './screens/authLoadingScreen';
// Import navigator
 import { createDrawerNavigator } from '@react-navigation/drawer';


 import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme}
from '@react-navigation/native';

 const App = () => {
const Drawer = createDrawerNavigator();

   return (

          <NavigationContainer theme={NavigationDefaultTheme}>
            
            <Drawer.Navigator initialRouteName="loginScreen">
                  <Drawer.Screen name="Dashboard Screen" component={DashboardScreen} />
                  <Drawer.Screen name="authLoading Screen" component={AuthLoadingScreen} />
                  <Drawer.Screen name="loginScreen" component={LoginScreen} />
            </Drawer.Navigator>
        
          </NavigationContainer>

   );
 };

 export default App;
