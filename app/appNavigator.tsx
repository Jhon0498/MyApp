import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './login';
import index from './(tabs)/index';
import tipoDeConta from './tipoDeConta';
import criarContaCliente from './criarContaCliente';
import criarContaAdvogado from './criarContaAdvogado';
import ValidacaoCadastro from './validacaoCadastro';
import contaValidada from './contaValidada';

export type RootStackParamList = {
    home: undefined;
    login: undefined;
    tipoDeConta: undefined;
    criarContaCliente: undefined;
    criarContaAdvogado: undefined;
    ValidacaoCadastro: undefined;
    contaValidada: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={index} />
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="tipoDeConta" component={tipoDeConta} />
          <Stack.Screen name="criarContaCliente" component={criarContaCliente} />
          <Stack.Screen name="criarContaAdvogado" component={criarContaAdvogado} />
          <Stack.Screen name="ValidacaoCadastro" component={ValidacaoCadastro} /> 
          <Stack.Screen name="contaValidada" component={contaValidada} />
        </Stack.Navigator>
      </NavigationContainer>
    );  
  }