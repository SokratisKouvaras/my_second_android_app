 import React,{useEffect} from 'react';
 // Import screens
 import LoginScreen from './screens/loginScreen';
 import DashboardScreen from './screens/DashboardScreen';
 import AuthLoadingScreen from './screens/authLoadingScreen';
 import {DrawerContent} from './screens/DrawerContent';
// Import navigator
 import { createDrawerNavigator } from '@react-navigation/drawer';
// Import Auth
import { AuthContext } from './components/context';

 import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme}
from '@react-navigation/native';

const App = () => {
const Drawer = createDrawerNavigator();
const [isLoading, setIsLoading] = React.useState(true);
const [userToken, setUserToken] = React.useState(null); 
const authContext = React.useMemo(() => ({
  signIn:() => {
    setUserToken('fgkj');
    setIsLoading(false)
  },
  signOut:()  => {
    setUserToken(null);
    setIsLoading(false);
  }
}),[]);
//<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}></Drawer.Navigator>
//<Drawer.Navigator initialRouteName="Dashboard Screen">
   return (
    <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={NavigationDefaultTheme}>
             { userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
           
                  <Drawer.Screen name="Dashboard Screen" component={DashboardScreen} />
                  <Drawer.Screen name="authLoading Screen" component={AuthLoadingScreen} />
            </Drawer.Navigator>
             )
            :
            <LoginScreen/>
        }
          </NavigationContainer>
      </AuthContext.Provider>

   );
 };

 export default App;
