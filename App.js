/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react';
import {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import Tickets from './Tickets';
import Contact from './Contact';
import News from './News';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TicketPurchase from './TicketPurchase';

const STACK = createStackNavigator();

const Section = ({children, title})  => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App =  () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden />
      <NavigationContainer>
        <STACK.Navigator
         initalRouteName='Home'
         headerMode='float'
        >
          <STACK.Screen name='Home' options={{headerShown: false}}>
            {(props) => <Home {...props} username='Test User' />}
          </STACK.Screen>
          <STACK.Screen name='Tickets' component={Tickets} options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'ZenKakuGothicAntique-Regular'}
          }} />
          <STACK.Screen 
          name='Contact' 
          component={Contact} 
          options={{ 
            headerTitleAlign: 'center', 
            headerTitleStyle: {fontFamily: 'ZenKakuGothicAntique-Regular'}, 
            headerTitle: 'Contact Us'
            }}
            />
          <STACK.Screen 
          name='Purchase'
          component={TicketPurchase}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Purchase Tickets'
          }}
          />
          <STACK.Screen 
          name='News'
          component={News}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Latest News'
          }}
          />
        </STACK.Navigator>
      </NavigationContainer>
      </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
