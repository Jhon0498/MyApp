import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importação do hook de navegação
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './appNavigator';
  
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const tipoDeConta = () => {
    const navigation = useNavigation<NavigationProp>();  // Hook de navegação
    const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <View style={styles.container}>

      <Image 
              source={require('../assets/images/DireitosConnect.png')} 
              style={styles.logo} 
              accessibilityLabel="Logo do DireitosConnect" 
            />
            <Text style={styles.title} accessibilityLabel="Título da aplicação">
              DireitosConnect
            </Text>

      <Text style={styles.title}>Seleção de Conta</Text>
      <Text style={styles.description}>Escolha uma opção:</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('criarContaAdvogado')}
      >
        <Text style={styles.buttonText}>Advogado</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('criarContaCliente')} // Substitua 'login' pela rota correta, se aplicável
      >
        <Text style={styles.buttonText}>Cliente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Fundo escuro
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
    color: '#fff', // Cor do título
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#bbb', // Cor do texto de descrição
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5e2a2a', // Cor do botão
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default tipoDeConta;