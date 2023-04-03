import React, { useState } from 'react';
import Loading from './components/Loading';
import { Image, StyleSheet, View } from "react-native";
import { useEffect } from 'react';
import backgroundTaTeTi from "./assets/ttt_board.png";

export default function App() {
  
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad((load)=>!load);
    }, 6000);
  }, [load]);
  return (
    <View style={styles.container}>
      {load ? null : <Loading></Loading>}
      {load ? null: <Image
        source={backgroundTaTeTi}
        resizeMode="stretch"
        style={styles.image}
      /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0000000",
  },
  image: {
    width: "85%",
    height: "60%",
    marginLeft: 10,
  },
});
