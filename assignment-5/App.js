import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { themeContext, themeProvider } from './context/theme';
import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from './screens/SettingsScreen';
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

function MyTabs() {
  const { darkTheme } = useContext(themeContext);

  return(
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Transaction") {
          iconName = focused ? "card" : "card-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        } else if (route.name === "Statistics") {
          iconName = focused ? "stats-chart" : "stats-chart-outline";
        }

        return <Ionicons name = {iconName} size = {size} color = {color} />
      },

      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: darkTheme ? "#333" : "#fff"
      },
      headerShown: false,
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const App =() => {
  return (
    <themeProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </themeProvider>
  );
}

export default App;