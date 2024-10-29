import React, { useState } from 'react';
import { View, Text, TextInput, Button,Image, StyleSheet,TouchableOpacity, Alert, } from 'react-native';
import axios from 'axios';


const LoginScreen = ({ onNavigateToVolunt, onNavigateToCadastro }) => {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:8082/api/login', { Email, Senha });
      console.log('Resposta da API:', response.data); // Log da resposta
      Alert.alert('Login bem-sucedido', `Bem-vindo, ${response.data.name}!`);
      onNavigateToVolunt(); // Navegar para a próxima tela
    } catch (error) {
      console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };


  return (
   <View style={styles.container}>  
   
      {/* Imagem no topo da tela */}
      <Image 
        source={require('../assets/logo.jpg')} 
        style={styles.logo} 
        resizeMode="cover"
      />
       {/* Linha azul */}
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
      {/* Botão para navegar ao cadastro */}
      <TouchableOpacity style={styles.button} onPress={onNavigateToVolunt}>
        <Text style={styles.buttonText}>ENTRAR</Text>
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
