import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding';
import App from '../../App';

export type RootStackParamList = {
    Onboarding: undefined;
    App: undefined;
}

const RootStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
    );
}