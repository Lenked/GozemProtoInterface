import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { styles } from '../../Styles';

const ListItem = ({ title, thumbnailUrl }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
    <Text style={styles.title}>{title.substring(0, 30)}...</Text>
  </View>
);

const HomePrincipal = () => {
  const [data, setDatas] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(datas => {
          setDatas(datas)
        })
  }, [data])

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ListItem {...item} />}
    />
  );
};

export default HomePrincipal;
