import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const getResults = () => {
    const url = ``
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter city name to search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <Button
          onPress={getResults}
          title="Search"
        />
      </View>
      <View style={styles.results}>
        {results.length > 0 ? (
          <Text style={styles.resultsTitle}>Results</Text>
        ) : null}
        {results.map(result => (
          <View style={styles.result}>
            result
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 36,
    marginBottom: 24
  },
  searchContainer: {
    display: "flex",
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1, 
    borderRadius: 8,
    borderColor: "black", 
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  resultsTitle: {
    textAlign: "left",
    fontWeight: "bold"
  },
  results: {
  },
  result: {
  },
});
