import React from 'react';
import { StyleSheet, Text, View, useColorScheme, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface Props {
  header: string;  
}

const SigningHeaders: React.FC<Props> = ({ header }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDark && { backgroundColor: '#141416' }]}>
      <Text style={[styles.headerText, isDark && { color: 'white' }]}>{header}</Text>
    </View>
  );
};

export default SigningHeaders;

type Styles = {
  container: StyleProp<ViewStyle>;
  headerText: StyleProp<TextStyle>;
};

const styles = StyleSheet.create<Styles>({
  container: {
    paddingBottom: 72,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
  },
});
