import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContaCriadaSucesso = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>DC</Text>
        </View>
      </View>
      
      {/* Mensagem */}
      <Text style={styles.message}>Conta criada com sucesso!</Text>

      {/* Ícone de sucesso */}
      <Image
        source={require('../../assets/images/success-check.png')} // Substitua pelo ícone correspondente
        style={styles.successIcon}
        accessibilityLabel="Ícone de sucesso"
      />
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
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    backgroundColor: '#5A1C1C', // Fundo do logo
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  message: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  successIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default ContaCriadaSucesso;