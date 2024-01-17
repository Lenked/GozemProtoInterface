import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import AuthScreen from "./auth/AuthScreen";
import WelcomeScreen from "./welcome/WelcomeScreen";
import HomeScreen from "./home/HomeScreen";

const tabs = createNativeStackNavigator()

export default function Root() {
  return (
    <tabs.Navigator>
      <tabs.Screen name="auth" component={AuthScreen} options={{headerShown: false}}/>
      <tabs.Screen name="welcome" component={WelcomeScreen} options={{headerShown: true, headerTitle: "", headerStyle: {backgroundColor: '#169137'}, headerTintColor: '#FFFFFF', headerShadowVisible: false}} />
      <tabs.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
    </tabs.Navigator>
  )
}
