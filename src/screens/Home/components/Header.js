import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../../../assets/logo.png';

import topo from '../../../mocks/topo';

const Header = () => {
  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.imagem} />
      <Text style={styles.boasVindas}>{topo.boasVindas}</Text>
      <Text style={styles.legenda}>{topo.legenda}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Header;
