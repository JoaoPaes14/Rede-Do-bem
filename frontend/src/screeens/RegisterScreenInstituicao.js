import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,Image,ScrollView } from 'react-native';
import axios from "axios";

const RegisterScreenOrg = ({  onNavigateToResgister }) => { 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState(''); 
  const [telefone, setTelefone] = useState(''); 
  const [area_atuacao, setAreaAtuacao] = useState(''); 
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cnpj, setCnpj] = useState('');

    const handleRegister = async () => {
        if (senha !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:8082/api/Organizacao', {
                nome,
                email,
                endereco,
                telefone,
                area_atuacao,
                senha,
                cnpj,
            });


            if (response.status >= 200 && response.status < 300) {
                Alert.alert('Cadastro bem-sucedido', `Bem-vindo, ${response.data.nome || response.data.Nome}!`);
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
      <Button title="Cadastrar" onPress={handleRegister} color="#007bff" />
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
  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 2 , 
    textAlign: 'center', 
    padding: 10, 
    
  },
});


export default RegisterScreenOrg;
