import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 

import SingIn from "../pages/SignIn"
import Register from "../pages/Register";
import Home from "../pages/Home";

import { footerObjects } from "../model/footer-objects";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function Routes() {
    return (

        <Stack.Navigator >

            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeTab}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    )
}

function HomeTab() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                backgroundColor: '#00D1C0',  //'#28DA91'
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                borderTopWidth: 0,
                height: 90,
                

            }
        }}
        >

            {footerObjects.map(({ name, route,icon,iconD }, key) => (
                <Tab.Screen key={key}
                    name={name}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused })  => {
                            if(focused){
                              return icon
                            }
                            return iconD
                        }
                    }} />
            ))}
        </Tab.Navigator>

    )

}