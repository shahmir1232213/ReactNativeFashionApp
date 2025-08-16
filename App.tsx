import { StyleSheet, SafeAreaView } from 'react-native'
import AppNavigator from './src/AppNavigator'

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