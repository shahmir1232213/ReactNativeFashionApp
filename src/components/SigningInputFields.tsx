import { StyleSheet, View, TextInput, useColorScheme } from 'react-native'
import React from 'react'

interface Label {
  placeholder: string;
  state: string;
  setState: (value: string) => void;
}

interface Props {
  labels: Label[];
}

const SigningInputFields: React.FC<Props> = ({ labels }) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  return (
    <View>
      {labels.map((label, index) => (
        <View key={index}>
          <TextInput
            style={[
              styles.input,
              isDarkMode ? styles.inputDark : styles.inputLight,
            ]}
            placeholder={label.placeholder}
            placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
            value={label.state}
            onChangeText={(text) => label.setState(text)}
          />
        </View>
      ))}
    </View>
  );
};

export default SigningInputFields;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  inputLight: {
    borderColor: '#888',
    color: 'black',
    backgroundColor: '#fff',
  },
  inputDark: {
    borderColor: '#555',
    color: 'white',
    backgroundColor: '#141416',
  },
});
