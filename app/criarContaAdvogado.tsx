import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importando ícones


export default function criarContaAdvogado() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/DireitosConnect.png')} 
        style={styles.logo} 
        accessibilityLabel="Logo do DireitosConnect"
      />

      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        placeholderTextColor="gray" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="CPF" 
        placeholderTextColor="gray" 
        keyboardType="numeric" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="gray" 
        keyboardType="email-address" 
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Senha"
          placeholderTextColor="gray"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon 
            name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
            size={20} 
            color="gray" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Confirmar senha"
          placeholderTextColor="gray"
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon 
            name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} 
            size={20} 
            color="gray" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    color: 'white',
    padding: 10,
  },
  button: {
    backgroundColor: '#5e2a2a',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'gray',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
