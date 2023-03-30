import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
//import { Icon } from "@rneui/themed";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.loading}>Loading Spinner</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    fontSize: 30,
    alignItems: 'center'
  }
});
