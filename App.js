import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import
  {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Provider } from 'react-native-paper';
import AnimTab1 from './bottomTab/AnimTab1';
import Home from './screens/Home';
import Colors from './constants/Colors';
import Screen from './screens/Screen';
import ProductsList from './screens/shop/ProductsList';
import DetailsScreen from './screens/shop/DetailsScreen';
import Fab from './screens/fab/Fab';

const App = () =>
{
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white} />
        <NavigationContainer>

          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) =>
{
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () =>
{
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Colors.white,
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const RootStack = () =>
{
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Screen" component={Screen} />
      <Stack.Screen name="Products" component={ProductsList} />
      <Stack.Screen name="Details" component={DetailsScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen name="Fab" component={Fab} />
    </Stack.Navigator>
  )
}

export default App;
