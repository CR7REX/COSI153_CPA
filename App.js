import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchScreen from './screens/SearchScreen'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import TechScreen from './screens/TechScreen'
import SportScreen from './screens/SportScreen'
import BusinessScreen from './screens/BusinessScreen'
import ScienceScreen from './screens/ScienceScreen'
import HealthScreen from './screens/HealthScreen'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="gamepad" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={SportScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="futbol-o" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={BusinessScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="suitcase" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Science"
          component={ScienceScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="flask" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="heart" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={20} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
