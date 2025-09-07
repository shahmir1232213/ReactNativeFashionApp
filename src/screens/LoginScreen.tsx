import { Pressable, StyleSheet, Text, View } from 'react-native'
import SigningHeaders from '../components/Form/SigningHeaders'
import SigningInputFields from '../components/Form/SigningInputFields'
import SigningButton from '../components/Buttons/SigningButton'
import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux'
import React,{useState,useEffect} from 'react'
import * as Keychain from "react-native-keychain";
import API from '../api'
import { setUser } from '../redux/slices/userSlice'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch()
//  useEffect(()=>{
//     async function clear(){
//       setTimeout(async () => (await Keychain.resetGenericPassword()),1500 )
//       console.log('token removed')
//     }
//     clear()
//   },[])

  async function handleLogin(email: string, password: string) {
      if (!email || !password) {
       console.log("Email and password are required");
       return;
      }
      try{
       const response = await API.post('/login',{email, password});
        if(response.status === 200){
          console.log("response", response.data);
          await Keychain.setGenericPassword('token', response.data.token);
          dispatch(setUser(email))
          navigation.navigate('MainTabs',{screens:'Home'});
         //navigation.navigate('TestScreen')
         // const credentials = await Keychain.getGenericPassword();
         // console.log('Credentials successfully saved to Keychain!', credentials);

        }
        else{
          console.log("Login failed with status:",response.status);
        }
      } catch (error: any) {
        console.error("Error connecting to backend:", error.message);
      }

    }

  return (
    <View style={{paddingTop: 47,paddingLeft:30,paddingRight:30}}>
      <SigningHeaders header={`Log into ${'\n'}your account`} />
      <SigningInputFields labels={[
        { placeholder: 'Email address', state: email, setState: setEmail },
        { placeholder: 'Password', state: password, setState: setPassword }
      ]} />
      <View style={{alignItems:'center'}}>
        <SigningButton title='Log In' onPress={() => handleLogin(email, password)} />
      </View>
    <Pressable onPress={()=>navigation.navigate('SignUpScreen')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
    </Pressable>
    
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    signupText: {
        textAlign: 'center',
        marginTop: 20,
    },
})