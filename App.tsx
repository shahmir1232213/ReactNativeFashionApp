import { StyleSheet, SafeAreaView } from 'react-native'
import AppNavigator from './src/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';
import IsLoggedIn from './src/components/isLoggedIn' // Capitalized
import store from './src/redux/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Required for SafeAreaView to work properly
  },
})

export default App
