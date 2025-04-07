import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importação do hook de navegação
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../appNavigator';

// Definindo os tipos para as telas da navegação

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const App = () => {
  const navigation = useNavigation<NavigationProp>();  // Hook de navegação
  const Stack = createNativeStackNavigator<RootStackParamList>();

  

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

      <TouchableOpacity onPress={() => navigation.navigate('tipoDeConta')}>
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
    backgroundColor: '#5e2a2a',
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
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
