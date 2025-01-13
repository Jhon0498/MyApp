import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importação do hook de navegação

// Definindo os tipos para as telas da navegação
type RootStackParamList = {
  Home: undefined;
  login: undefined; // Defina a tela de login como um destino da navegação
};

const App = () => {
  const navigation = useNavigation();  // Hook de navegação

  return (
    <View style={styles.container}>  
      <Image 
        source={require('../../assets/images/DireitosConnect.png')} 
        style={styles.logo} 
        accessibilityLabel="Logo do DireitosConnect" 
      />
      <Text style={styles.title} accessibilityLabel="Título da aplicação">
        DireitosConnect
      </Text>
      <Text style={styles.description}>Descomplicando o Direito, Conectando Justiça!</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('login')} // Navegação para a tela de login
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('Criar Conta')}>
        <Text style={styles.createAccount}>Inscrever-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B83B5E',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccount: {
    color: '#B83B5E',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
