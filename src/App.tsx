import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store, { persistor } from './store';
import { UserListScreen, UserProfileScreen } from './screens';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#4350AF', borderBottomWidth: 0 },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <RootStack.Screen name="UserList" component={UserListScreen} options={{ title: 'Users' }} />
            <RootStack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'User Profile' }} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
