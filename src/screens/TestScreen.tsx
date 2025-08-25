import { StyleSheet, Text, View,Pressable,Modal} from 'react-native'
import * as Keychain from "react-native-keychain";
import { useNavigation } from '@react-navigation/native';
import SigningButton from '../components/SigningButton';
import React,{useState,useEffect} from 'react'
import API from '../api';

const TestScreen = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)
  const [responseMsg,setResponseMsg] = React.useState<string>('')
  const [userName,setUserName] = React.useState<string>('')
 // const [status, setStatus] = useState(""); // default
  const navigation = useNavigation();

  useEffect(()=>{
    if(modalVisible === true){
      setTimeout(() => setModalVisible(false), 1500);
    }
  },[modalVisible])

  useEffect(()=>{
    async function clear(){
      setTimeout(async () => (await Keychain.resetGenericPassword()),1500 )
    }
    clear()
  })

  async function checkCredentials() {
    try {
     // const credentials = await Keychain.getGenericPassword();

      const response = await API.get("/protected", {
        validateStatus: () => true, // <-- prevents Axios from throwing
      });

    //     console.log("DEBUG -> status:", response.status);
    // console.log("DEBUG -> data:", response.data);

      if (response.status === 401) {
        setResponseMsg("Token expired, please log in again");
       // setStatus("❌");
        setModalVisible(true);
        setTimeout(() => {
          navigation.navigate("LoginScreen");
        }, 1500); 
      } else {
        console.log("Response:", response.data);
        setUserName(response.data.userName);
       // setResponseMsg(response.data.message);
       // setStatus("✅");
       // setModalVisible(true);
      }
    } catch (error: any) {
      console.error("Network error:", error.message);
      setResponseMsg("Network error occurred");
      setModalVisible(true);
    }
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable style={styles.button} onPress={checkCredentials}>
        <Text style={{ color: 'white',fontWeight:'bold' }}>Press to check if your JWT is working</Text>
      </Pressable>
      <SigningButton title='Navigate' onPress={()=>{navigation.navigate('MainTabs',{screens:'Home'})}}/>
      {userName ? <Text style={{ color: 'black', fontWeight: 'bold' }}>{userName}</Text> : null}
      
      {
        modalVisible === true ? (
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>❌ {responseMsg}</Text>
              </View>
            </View>
          </Modal>
        ):null
      } 
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    button:{
        marginTop:20,
        backgroundColor:'black',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        width:250,
        alignSelf:'center',
    },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  }
})