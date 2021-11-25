import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginScreen from '../../screens/LoginScreen';
import ResultScreen from '../../screens/ResultScreen';
import TriviaScreen from '../../screens/TriviaScreen';

const Stack = createNativeStackNavigator();

const Component = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Trivia' component={TriviaScreen} />
            <Stack.Screen name='Result' component={ResultScreen} />
        </Stack.Navigator>
    )
}

export default Component
