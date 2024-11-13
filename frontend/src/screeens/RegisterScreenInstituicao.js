import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, ScrollView, Modal } from 'react-native';

const RegisterScreenOrg = ({ NavigateToLoginOrg, }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [area_atuacao, setAreaAtuacao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [showMensagemSucesso, setMensagemSucesso] = useState(false);

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
        setMensagemSucesso(true);
        setTimeout(() => {
          setMensagemSucesso(false);
          NavigateToLoginOrg();
        }, 2000); // A mensagem desaparece após 2 segundos
      } else {
        Alert.alert('Erro', data.message || 'Ocorreu um erro ao cadastrar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar instituição', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image
        source={require('../assets/logo.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
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
        onChangeText={(text) => setTelefone(text.replace(/[^0-9]/g, ''))} 
        keyboardType="numeric" 
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

      {/* Modal de sucesso */}
      <Modal
        transparent={true}
        visible={showMensagemSucesso}
        animationType="fade"
        onRequestClose={() => setMensagemSucesso(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.MensagemSucesso}>
            <Text style={styles.TextoSucesso}>Organização Cadastrada com Sucesso!</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d9edf3',
    alignItems: 'center',
    paddingVertical: 20, // Espaçamento adicional
  },
  logo: {
    width: '100%',
    height: 200, // Altura fixa para melhor adaptação em várias telas
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
    marginBottom: 20,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MensagemSucesso: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  TextoSucesso: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreenOrg;
