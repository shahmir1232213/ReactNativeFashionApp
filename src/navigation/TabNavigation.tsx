import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/Feather'
import Profile from 'react-native-vector-icons/Ionicons'
import { useColorScheme } from 'react-native';
import IsLoggedIn from '../components/isLoggedIn'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor: colorScheme === 'dark' ? '#0ca5e9' : '#636363',
        tabBarInactiveTintColor: '#c9c8c8ff',
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#141416' : 'white',
        },
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