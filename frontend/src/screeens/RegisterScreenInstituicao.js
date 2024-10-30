import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, ScrollView } from 'react-native';


const RegisterScreenOrg = ({ onNavigateToVagas, onNavigateToRegister }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [area_atuacao, setAreaAtuacao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cnpj, setCnpj] = useState('');

  const handleCadastro = async () => {
    if (senha !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8088/api/Organizacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nome: nome,
          Email: email,
          Endereco: endereco,
          Telefone: telefone,
          Area_atuacao: area_atuacao,
          Senha: senha,
          Cnpj: cnpj,
        }),
      });

      const data = await response.json();

      if (response.status >= 200 && response.status < 300) {
        Alert.alert('Cadastro bem-sucedido', `Bem-vindo, ${data.nome || data.Nome}!`, [
          {
            text: 'OK',
            onPress: () => onNavigateToVagas(), // Navega para a tela de vagas após o cadastro bem-sucedido
          },
        ]);
      }
    } catch (error) {
      console.error('Erro ao cadastrar instituição', error);
      const errorMessage = error.response?.data?.message || 'Ocorreu um erro ao cadastrar. Tente novamente.';
      Alert.alert('Erro', errorMessage);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem no topo da tela */}
      <Image
        source={require('../assets/logo.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
      {/* Linha azul */}
      <View style={styles.divider} />

      <Text style={styles.title}>Cadastro de Instituição</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Área de Atuação"
        value={area_atuacao}
        onChangeText={setAreaAtuacao}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmação da Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />
      <Button title="Cadastrar" onPress={handleCadastro} color="#007bff" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d9edf3',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '25%',
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
    fontSize: 12,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#007bff',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
    textAlign: 'center',
    padding: 10,
  },
});

export default RegisterScreenOrg;
