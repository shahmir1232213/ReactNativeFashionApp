import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect } from 'react'

interface Label {
  placeholder: string;
  state: string;
  setState: (value: string) => void;
}
interface Props {
  labels: Label[];
}

const SigningInputFields: React.FC<Props> = ({ labels }) => {
  return (
    <View>
      {
        labels.map((label, index) => (
          <View key={index}>
            {/* You can customize the TextInput styles as needed */}
            <TextInput
                style={styles.input}
                placeholder={label.placeholder}
                placeholderTextColor={'black'}
                value={label.state}
                onChangeText={(text) => label.setState(text)}
            />
          </View>
        ))
      }
    </View>
  )
}

export default SigningInputFields

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    color: 'black',
  
  }
})