import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';

const HomePage = () => {
  return (
    <View style={styles.page}>
      <SubHeader />
      <Gap height={40} />
      {/* <TouchableOpacity> */}
      <View style={styles.container}>
        {/* <FlowerHome height="50" width="50" /> */}
        <View style={styles.wrapper}>
          <Text style={styles.text}>BOUQUET FLOWER</Text>
          <Text style={styles.text1}>Start from 75k</Text>
        </View>
      </View>
      {/* </TouchableOpacity> */}
      <Gap height={30} />
      <View style={styles.container1}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>BOUQUET CHARACTER</Text>
          <Text style={styles.text1}>Start from 75k</Text>
        </View>
      </View>
      <Gap height={30} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>BOUQUET MONEY</Text>
          <Text style={styles.text1}>Start from 75k</Text>
        </View>
      </View>
      <Gap height={40} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    // flexDirection: 'column',
  },
  container: {
    flex: 0.4,
    backgroundColor: '#FFE2E2',
    borderRadius: 15,
    marginHorizontal: 40,
    elevation: 7,
    justifyContent: 'center',
  },
  container1: {
    flex: 0.4,
    backgroundColor: '#FFC7C7',
    borderRadius: 15,
    marginHorizontal: 40,
    elevation: 7,
    justifyContent: 'center',
  },
  wrapper: {
    width: 150,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 20,
  },
  text1: {
    paddingHorizontal: 10,
    color: 'grey',
    fontSize: 16,
  },
});
