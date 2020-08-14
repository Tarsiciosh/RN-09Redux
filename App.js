import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';

import store from './redux/store'
import { Provider } from 'react-redux'

const MainStack = createStackNavigator();

export default function App () {  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name='ContactList'
            component={ContactListScreen}
          />
          <MainStack.Screen 
            name='AddContact'
            component={AddContactScreen}           
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

















/*
const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
    AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: { <----------------
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)
*/

/*
MainStack.navigationOptions = { <-----------------
  tabBarIcon: ({focused, tintColor}) => ( 
    <Ionicons name={`ios-contacts${focused ? '' : '-outline'}`} size={25} color={tintColor} />
  ),
}
*/

/*
const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: { <----------------------
      activeTintColor: '#a41034',
    },
  }
)
*/

/*
export default class App extends React.Component {
  state = {
    contacts,
  }
  
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }))
  }

  render() {
    return (
      <MainTabs
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    )
  }
}
*/