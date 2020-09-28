import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Menu from '../screens/Menu';
import NewGame from '../screens/NewGame';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName = "Preload"
        screenOptions = {{
            headerShown: false,
            animationEnabled: false
        }}
        
    >
        <Stack.Screen name = "Preload" component = {Preload}
        
        />
        <Stack.Screen name = "Menu" component = {Menu} />
        <Stack.Screen name = "NewGame" component = {NewGame} />
    </Stack.Navigator>
);
