import React from "react";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import {Ionicons} from "@expo/vector-icons";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";
import firebase from 

const firebaseConfig = {
  apiKey: "AIzaSyAukNNWOf3iIDa1F3icsMuC4B6LGt00u3Q",
  authDomain: "chatty1-345e4.firebaseapp.com",
  projectId: "chatty1-345e4",
  storageBucket: "chatty1-345e4.appspot.com",
  messagingSenderId: "679212657361",
  appId: "1:679212657361:web:3cd2d222578056a35db3f0"
};
const ChatsStack =createStackNavigator()

const ChatsScreen= () =>{
  return ( 
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Sohbetler" component={Chats} />
      <ChatsStack.Screen name="Sohbet" component={Chat} />
    </ChatsStack.Navigator>
    );};

const SettingsStack=createStackNavigator()
const SettingsScreen= () =>{
  return ( 
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Ayarlar" component={Settings} />
    </SettingsStack.Navigator>
    )}
  
const Tabs = createBottomTabNavigator()
const TabsScreen = () => ( 
  <Tabs.Navigator 
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Chats') {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {iconName = focused ? 'settings' : 'settings-outline';}
        return <Ionicons name={iconName} size={size} color={color} />;
      },})}
     
    tabBarOptions={{
      activeTintColork: '#311a91',
      inactiveTintColor: 'black',
    }}>
      <Tabs.Screen name="Chats" component={ChatsScreen}/>
      <Tabs.Screen name="Settings" component={SettingsScreen}/>
    </Tabs.Navigator>
  )


  const MainStack= createStackNavigator()


  const App = () => {
    return ( 

    <NavigationContainer>

      <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Tabs" components={TabsScreen} />
      <MainStack.Screen name="SingUp" components={SignUp} />
      <MainStack.Screen name="SingIn" components={SignIn} />
      </MainStack.Navigator>

    </NavigationContainer>
    )

}

export default App;


