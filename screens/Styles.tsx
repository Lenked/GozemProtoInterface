import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#169137',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    TitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF',
        padding: 5
    },
    descriptionText:{
        color: '#FFFFFF',
        fontSize: 14,
        padding: 5
    },
    input: {
        margin: 12,
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
      },
      buttonText: {
        color: '#169137',
        fontSize: 16,
      },
      countryImage: {
        width: 30,
        marginRight: 10,
        marginLeft: 5,
        paddingVertical: 10
      },
      inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000', // Couleur de la bordure du bas
        marginBottom: 15, // Espacement en bas du TextInput
        width: 350,
      },
      input_email: {
        height: 40,
        fontSize: 16,
        color: '#000000', // Couleur du texte
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      buttonClose: {
        backgroundColor: '#169137',
        padding: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
      },
      countryImageModal: {
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
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      loader: {
        marginVertical: 20,
      },
});
