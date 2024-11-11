import axios from 'axios';
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const LoginScreen = ({ onNavigateToVolunt }) => {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);  // Para controlar o estado de carregamento

  const handleLogin = async () => {
    if (!Email || !Senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true); // Ativa o estado de carregamento

    try {
      const response = await axios.post('http://10.0.2.2:808/api/login', { Email, Senha });
      console.log('Resposta da API:', response.data);
      Alert.alert('Login bem-sucedido', `Bem-vindo, ${response.data.name}!`);
      onNavigateToVolunt(); // Navega para a tela de voluntários
    } catch (error) {
      console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };

  return (
      <View style={styles.container}>
        <Image
            source={require('../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"  // Ajusta para não deformar a logo
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
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9edf3',
    alignItems: 'center',
    justifyContent: 'center',  // Centraliza o conteúdo
    padding: 20,  // Adiciona padding para deixar a tela mais espaçosa
  },
  logo: {
    width: '100%',  // Ajusta a largura da logo para não ocupar toda a tela
    height: 150,   // Ajusta a altura da logo
  },
  input: {
    width: '100%',
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
  button: {
    backgroundColor: '#646262',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
