import { StyleSheet, Text, View, Modal } from 'react-native'
import * as Keychain from "react-native-keychain"
import React, { useEffect } from 'react'
import LoginScreen from '../screens/LoginScreen' // ⬅️ adjust path to your LoginScreen

interface Props {
  children: React.ReactNode
}

const IsLoggedIn: React.FC<Props> = ({ children }) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [hasCredentials, setHasCredentials] = React.useState<boolean | null>(null)
  console.log('running is logged in')
  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => setModalVisible(false), 1500)
    }
  }, [modalVisible])

  // Auto-run check on mount
  useEffect(() => {
    async function checkCredentials() {
      const credentials = await Keychain.getGenericPassword()
      if (!credentials) {
        setModalVisible(true)
        setHasCredentials(false)
      } else {
        setHasCredentials(true)
      }
      setLoading(false)
    }
    checkCredentials()
  }, [])

  if (loading) {
    return <Text>Loading ............</Text>
  }

  return (
    <>
      {hasCredentials ? children : <LoginScreen />}

      {modalVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>❌ Please Login</Text>
            </View>
          </View>
        </Modal>
      )}
    </>
  )
}

export default IsLoggedIn

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
})
