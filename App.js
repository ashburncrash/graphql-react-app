import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Movies</Text>
      </View>
      <View style={styles.bodyContainer}>
        {/* <Text>This is body</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white'
  },
  elementContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    marginTop:40,
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});