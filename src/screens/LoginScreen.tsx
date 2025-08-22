import { Pressable, StyleSheet, Text, View } from 'react-native'
import SigningHeaders from '../components/SigningHeaders'
import SigningInputFields from '../components/SigningInputFields'
import SigningButton from '../components/SigningButton'
import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'

function handleLogin(email: string, password: string) {
  console.log('Logging in with:', email, password);
}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 47,paddingLeft:30,paddingRight:30}}>
      <SigningHeaders header={`Log into ${'\n'}your account`} />
      <SigningInputFields labels={[
        { placeholder: 'Email address', state: email, setState: setEmail },
        { placeholder: 'Password', state: password, setState: setPassword }
      ]} />
      <View style={{alignItems:'center'}}>
        <SigningButton title='Log In' />
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