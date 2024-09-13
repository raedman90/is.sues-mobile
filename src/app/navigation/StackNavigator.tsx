import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SigninScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import WelcomeScreen from '../screens/welcome';
import { FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
/* 
// Rotas Privadas com navegação empilhada
const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CriarEmpresa" component={HomeScreen} />
      <Stack.Screen name="BuscarEmpresas" component={HomeScreen} />
      <Stack.Screen name="DetalhesDaEmpresa" component={HomeScreen} />
      <Stack.Screen name="EditarEmpresa" component={HomeScreen} />
      
    </Stack.Navigator>
  );
};

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      
    </Stack.Navigator>
  );
}; */

// Rotas Privadas com navegação por abas
const AppStack: React.FC = () => {
  
    

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#003366', // Cor do ícone e texto da aba ativa
        tabBarInactiveTintColor: '#8e8e8e', // Cor do ícone e texto da aba inativa
        tabBarStyle: {
          backgroundColor: '#ffffff', // Cor de fundo da barra de abas
          borderTopWidth: 0, // Remover a borda superior para um design mais limpo
          elevation: 0,
          marginTop: 6,
          // Remover a sombra para um estilo plano
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 12, // Tamanho da fonte dos rótulos
          fontWeight: '400', // Peso da fonte
          marginBottom: 4, // Espaço abaixo do texto
        },
        tabBarIconStyle: {
          marginBottom: 0, // Espaço abaixo do ícone
        },
      }}

    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="newIssue"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square-o" size={24} color={color} />
          ),
          tabBarLabel: 'Criar issues',
        }}
      />
      <Tab.Screen name="MyIssues" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" size={24} color={color} />
          ),
          tabBarLabel: 'Minhas issues',
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
};

// Rotas Públicas
const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={SigninScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// Definindo qual Stack exibir
export default function AppNavigator() {
  const { tokenState } = useAuth();
  return (
    <NavigationContainer>
      {!!tokenState ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
