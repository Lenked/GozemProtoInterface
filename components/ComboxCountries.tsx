import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

// Importez les icônes nécessaires de react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// ...

export default function ComboxCountries() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((country) => ({
          country: country.name.common,
          code: country.cca2,
          image: `https://flagcdn.com/w160/${country.cca2.toLowerCase()}.png`,
        }));
        setCountriesData(formattedData);
      });
  }, []);

  return (
    <SelectDropdown
      data={countriesData}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.country + " " + selectedItem.code;
      }}
      rowTextForSelection={(item, index) => {
        return item.country + " " + item.code;
      }}
      renderCustomizedRowChild={(rowData, index, isSelected) => (
        <View style={styles.rowContainer}>
          <Image source={{ uri: rowData.image }} style={styles.countryImage} />
          <Text style={styles.rowText}>{rowData.country + " " + rowData.code}</Text>
        </View>
      )}
      defaultButtonText={
        <View style={styles.defaultButtonContainer}>
          <Image source={{ uri: 'https://flagcdn.com/w160/cm.png' }} style={styles.countryImage} />
          <Text style={styles.defaultButtonText}> (+237)</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  countryImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  rowText: {
    fontSize: 16,
  },
  defaultButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

