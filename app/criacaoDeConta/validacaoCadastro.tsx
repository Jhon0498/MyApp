import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ValidacaoCadastro = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/DireitosConnect.png')}
        style={styles.logo}
        accessibilityLabel="Logo do DireitosConnect"
      />
      <Text style={styles.message}>
        Estamos validando seu cadastro.{"\n"}Aguarde um momento...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F', // Fundo escuro
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Largura do logo
    height: 100, // Altura do logo
    marginBottom: 20,
    resizeMode: 'contain', // Ajusta o logo para caber no espaço sem distorção
  },
  message: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ValidacaoCadastro;