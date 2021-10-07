import * as React from 'react';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesome5  } from '@expo/vector-icons';


const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#40afbf',
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveTintColor: "#cccccc",
        tabBarInactiveBackgroundColor: "#FFF"
      }}
>
<Tab.Screen name="Cats" component={Contact} options={{
          tabBarLabel: 'Cats',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cat" color={color} size={size} />
          ),
        }}/>

 <Tab.Screen name="Dogs" component={Home}    options={{
          tabBarLabel: 'Dogs',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dog" color={color} size={size} />
          ),
        }}/>
  </Tab.Navigator>
);
}