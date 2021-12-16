import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState();

  const getResults = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=435fff9d1d12fa8ca574767eaeee84da`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResult(data);
      });
  }

  function convertKelvinToCelsius(temperature){
    let temp = parseFloat(temperature);
    return (temp - 273.15).toFixed(2);
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
        <Text style={styles.resultsTitle}>Results</Text>
        {result ? (
          <View style={styles.result}>
            {convertKelvinToCelsius(result?.main?.temp)} degrees
          </View>
        ) : (
          <Text>No results</Text>
        )}
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
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  resultsTitle: {
    textAlign: "left",
    fontWeight: "bold"
  },
  result: {
    border: 1,
    borderColor: "black"
  },
});
