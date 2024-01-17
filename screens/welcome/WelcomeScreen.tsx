import React, { useState } from 'react';
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../Styles';

export default function WelcomeScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const isValidEmail = (email: string) => {
    // Expression régulière pour vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#FFF' }]}>
      <StatusBar backgroundColor={'#169137'} />
      <View style={{ backgroundColor: '#169137', flex: 0.3, width: '100%', flexDirection: 'column-reverse', paddingBottom: '10%', paddingLeft: '3%' }}>
        <Text style={[styles.descriptionText]}>Entrez votre adresse email</Text>
        <Text style={[styles.TitleText, { fontSize: 27 }]}>Bienvenue </Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input_email}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <Image
          source={require('../../assets/welcome_img.png')}
          style={{ width: 350, height: 150 }}
        />
      </View>
      <View style={{ width: '100%' }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: isValidEmail(email) ? '#169137' : '#A9A9A9', borderRadius: 20 }]} onPress={() => {
          if (isValidEmail(email)) {
            // Email valide, vous pouvez effectuer votre action ici
            navigation.navigate('home');
          } else {
            // Email non valide, vous pouvez afficher un message d'erreur ou effectuer une autre action
            console.error('Email non valide');
          }
        }}>
          <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>SUIVANT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
