import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Header2 from '../../components/molecules/Header2';
import Gap from '../../components/atoms/Gap';
import PinkContainer from '../../components/molecules/PinkContainer';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header2 onPress={() => navigation.navigate('ProfilePage')} />
      <Gap height={30} />
      <View style={styles.wrapper}>
        <PinkContainer
          onPressed={() => navigation.navigate('BouquetFlower')}
          title={'BOUQUET FLOWER'}
        />
        <PinkContainer
          onPressed={() => navigation.navigate('BouquetCharacter')}
          title={'BOUQUET CHARACTER'}
          color={'#FFC7C7'}
        />
        <PinkContainer
          onPressed={() => navigation.navigate('BouquetMoney')}
          title={'BOUQUET MONEY'}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
