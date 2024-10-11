import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';


const LoginScreen = ({ onNavigateToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/api/login', { email, password });
      Alert.alert('Login bem-sucedido', `Bem-vindo, ${response.data.name}!`);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };

  return (
   <View style={styles.container}>
     {/* Imagem no topo da tela */}
     <Image
       source={require('../assets/logo.jfif')} // Verifique se o caminho está correto
       style={styles.logo}
     />

      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        placeholderTextColor="#d9edf3"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        placeholderTextColor="#d9edf3"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Esqueceu sua senha?" onPress={onNavigateToRegister} color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d9edf3',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#646262',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
