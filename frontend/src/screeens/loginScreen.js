import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert, } from 'react-native';
import axios from 'axios';


const LoginScreen = ({ onNavigateToCadastro, onNavigateToVolunt,onNavigateToVoluntario }) => {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!Email || !Senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8088/api/voluntarios/login', {
        email: Email,   // Corrigido para 'email' e 'senha'
        senha: Senha,
      });
      console.log('Resposta da API:', response.data);
      Alert.alert('Login bem-sucedido', `Bem-vindo, ${response.data.nome}!`);
      onNavigateToVolunt();
    } catch (error) {
      console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
      <View style={styles.divider} />

      <TextInput
        style={styles.input}
        placeholder="E-MAIL"
        placeholderTextColor="#d9edf3"
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        placeholderTextColor="#d9edf3"
        value={Senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}  // Desativa o botão enquanto a requisição está em andamento
      >
        {loading ? (
          <Text style={styles.buttonText}>Carregando...</Text>
        ) : (
          <Text style={styles.buttonText}>ENTRAR</Text>
        )}
         
      </TouchableOpacity>
      <TouchableOpacity onPress={onNavigateToVoluntario}>
                <Text style={styles.toggleText}>Ainda não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9edf3',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '40%',
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#646262',
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 20,
    borderRadius: 50,
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#007bff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 5,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#646262',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  toggleText: {
    marginTop: 1,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#646262',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },

});

export default LoginScreen;
