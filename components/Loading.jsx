import React from 'react'
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View>
      <Text style={styles.loading}>Loading hhh</Text>
      <StatusBar style="auto" hidden />
    </View>
  );
} 

const styles = StyleSheet.create({
  loading: {
    fontSize: 60,
    alignItems: 'center'
  }
});
