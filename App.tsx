import { StyleSheet, SafeAreaView } from 'react-native'
import AppNavigator from './src/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';
import IsLoggedIn from './src/components/isLoggedIn' // Capitalized

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <AppNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Required for SafeAreaView to work properly
  },
})

export default App
