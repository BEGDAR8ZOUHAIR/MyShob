import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import
  {
    SafeAreaView,
    StatusBar,
    useColorScheme,
  } from 'react-native';
import AnimTab1 from './bottomTab/AnimTab1';
import Home from './screens/Home';
import Colors from './constants/Colors';
import { Provider } from 'react-native-paper';
import Screen from './screens/Screen';
import ProductsList from './screens/shop/ProductsList';
import DetailsScreen from './screens/shop/DetailsScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
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

const RootStack = () =>
{
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home}
        options={{ title: 'Shop app', headerShown: false }} />
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
