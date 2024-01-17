import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationBubble = ({ notificationCount }) => {
    return (
      <View style={styles.bubbleContainer}>
        <Text style={styles.notificationCount}>{notificationCount}</Text>
      </View>
    );
  };

const TopAppBar = () => (
  <View style={styles.topBarContainer}>
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name="person" size={30} color="gray" style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name="notifications" size={30} color="gray" style={styles.icon} />
    </TouchableOpacity>
    <NotificationBubble notificationCount={5} />
  </View>
);

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 10,
    elevation: 5, // Ajoute une ombre à la barre supérieure
  },
  iconContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    borderRadius: 15,
    overflow: 'hidden',
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#169137',
  },
  bubbleContainer: {
    position: 'absolute',
    top: 10,
    right: 14,
    backgroundColor: 'red', // Couleur de la bulle de notification
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  notificationCount: {
    color: 'white', // Couleur du texte dans la bulle de notification
    fontSize: 12,
  },
});

export default TopAppBar;
