import React, { useState, useEffect } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View, Image, Modal, Pressable, ScrollView } from 'react-native';
import { styles } from '../Styles';

export default function AuthScreen({ navigation }) {
  const [number, onChangeNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/lang/french')
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

  const handleChange = () => {
    // Ajoutez votre logique de gestion de la sélection ici si nécessaire
  };

  const isValidPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length >= 8;
  };
  

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <Text style={styles.TitleText}>Se déplacer en Ville avec Gozem</Text>
        <Text style={styles.descriptionText}>Rester chez vous et un Champion viendra vous chercher</Text>
      </View>

      <View>
        <Image
          source={require('../../assets/auth_image.png')}
          style={{ width: 400, height: 200, marginHorizontal: 0 }}
        />
      </View>

      <View>
        <Text style={[styles.descriptionText]}>Entrer votre numéro pour créer votre numéro de téléphone pour créer un compte ou vous connecter</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 3, maxWidth: '30%' }}>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', marginStart: 10, height: 45, alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }} onPress={openModal}>
              <Image source={{ uri: selectedCountry ? selectedCountry.image : 'https://flagcdn.com/w160/cm.png' }} style={styles.countryImage} />
              <Text style={{}}>{selectedCountry ? `+${selectedCountry.code}` : '+CM'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 8, maxWidth: '70%' }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Numéro de téléphone"
              keyboardType="numeric"
              placeholderTextColor={'#169137'}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
        if (isValidPhoneNumber(number)) {
          // Numéro de téléphone valide, vous pouvez effectuer votre action ici
          navigation.navigate('welcome');
        } else {
          // Numéro de téléphone non valide, vous pouvez afficher un message d'erreur ou effectuer une autre action
          console.error('Numéro de téléphone non valide');
        }
      }}>
          <Text style={styles.buttonText}>S'IDENTIFIER</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sélectionnez un pays</Text>

            {/* Utilisez ScrollView pour rendre la liste scrollable */}
            <ScrollView>
              {countriesData.map((country, index) => (
                <TouchableOpacity key={index} onPress={() => {
                  setSelectedCountry(country);
                  closeModal();
                }}>
                  <View style={styles.rowContainer}>
                    <Image source={{ uri: country.image }} style={styles.countryImage} />
                    <Text style={styles.rowText}>{country.country + " " + country.code}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={{ ...styles.buttonClose, marginTop: 20 }}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
