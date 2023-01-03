import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

const Estrelas = ({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) => {
  const [quantidade, setQuantidade] = React.useState(quantidadeAntiga);
  const estilos = estilosFuncao(grande);

  const getImage = i => {
    if (i < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  };

  const RenderEstrelas = () => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}>
          <Image source={getImage(i)} style={estilos.estrela} />
        </TouchableOpacity>,
      );
    }
    return estrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
};

const estilosFuncao = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export default Estrelas;
