import React from 'react';
import AdminParticipantPage from '../Pages/Admin/AdminClientPage.js';
import AdminTrainerPage from '../Pages/Admin/AdminTrainerPage.js';
import SettingsPage from '../Pages/SettingsPage.js'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();


export default function LocationAdminNav() {
   return (
    <Tab.Navigator
    initialRouteName="Location"
    activeColor="#A0C700"
    inactiveColor="#AFAFAF"
    barStyle={{ backgroundColor: 'white' }}
    shifting={false}
    >
        <Tab.Screen name="Trainers" component={LocationAdminTrainerPage}
          options={{
          tabBarLabel: 'Trainers',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon name="dumbbell" color={color} size={26} />
          ),
          }}/>
      <Tab.Screen name="Participants" component={LocationAdminClientPage} 
           options={{
            tabBarLabel: 'Participants',
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={26} />
            ),
           }}/>
      <Tab.Screen name="Settings" component={SettingsPage}
                      options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                          <Icon name="settings" color={color} size={26} />
                        ),
                        }}/>
    </Tab.Navigator>
);
}