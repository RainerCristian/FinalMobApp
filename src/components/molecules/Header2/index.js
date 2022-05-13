import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Header2 = ({onPress}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.text}>U-BREAD</Text>
      </View>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#F6F6F6',
    alignItems: 'flex-end',
    paddingVertical: 25,
    paddingHorizontal: 15,
    paddingLeft: 130,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
