import * as React from "react";
import CameraScreen from "./stackComponents/CameraScreen";
import ImageScreen from "./stackComponents/ImageScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Contracts">
            <Stack.Screen 
                name="Contracts" 
                component={CameraScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#ba6262'}
                }}
            />
            <Stack.Screen 
                name="Image" 
                component={ImageScreen} 
                options={{
                    headerTitleStyle: { textAlign: 'right', color: 'white' },
                    headerStyle: {backgroundColor: '#62bab5'}
                }} 
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;