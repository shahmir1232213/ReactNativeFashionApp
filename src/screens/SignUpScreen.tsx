import { Pressable, StyleSheet, Text, View,useColorScheme } from 'react-native'
import SigningHeaders from '../components/Form/SigningHeaders'
import SigningInputFields from '../components/Form/SigningInputFields'
import SigningButton from '../components/Buttons/SigningButton'
import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'

function handleLogin(email: string, password: string) {
  console.log('Logging in with:', email, password);
}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark'
  // console.log("colorScheme:", colorScheme);
  // console.log("isDark:", isDark);
  return (
    <View style={{paddingTop: 47,paddingLeft:30,paddingRight:30,backgroundColor:isDark ? '#141416':'white',flex:1}}>
      <SigningHeaders header={`Create your${'\n'}your account`} />
      <SigningInputFields labels={[
        { placeholder: 'Full Name', state: fullName, setState: setFullName },
        { placeholder: 'Email address', state: email, setState: setEmail },
        { placeholder: 'Password', state: password, setState: setPassword },
        { placeholder: 'Confirm Password', state: confirmPassword, setState: setConfirmPassword }
      ]} />
      <View style={{alignItems:'center'}}>
        <SigningButton title='Sign Up' />
      </View>
    <Pressable onPress={()=>navigation.navigate('LoginScreen')}>
        <Text style={styles.signupText}>Already have an account? Log In</Text>
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