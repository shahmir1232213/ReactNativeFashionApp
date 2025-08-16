import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather'
import Profile from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#c9c8c8ff',
      }
    }>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            tabBarLabel:'',
            tabBarIcon:({color})=>(
                <Entypo name="home" size={30} color={color}/>
            //    <Entypo name="search" size={30} color="blue"/>
            )
        }}
      />  
      <Tab.Screen 
        name="Search" 
        component={HomeScreen} 
        options={{
            tabBarLabel:'',
            tabBarIcon:({color})=>(
          //      <Entypo name="home" size={30} color="blue"/>
               <Search name="search" size={30} color={color}/>
               
        )
       
        }}
      /> 
       <Tab.Screen 
        name="Profile" 
        component={HomeScreen} 
        options={{
            tabBarLabel:'',
            tabBarIcon:({color})=>(
          <Profile name="person-outline" size={30} color={color}/>             
        )
       
        }}
      />  
    </Tab.Navigator>
  );
}