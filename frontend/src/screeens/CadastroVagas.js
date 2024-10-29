import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const RegisterVagas = ({ onNavigateToVagas }) => {
  const [tipoVaga, setTipoVaga] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [diasSemana, setDiasSemana] = useState('');
  const [horario, setHorario] = useState('');
  const [horasCertificado, setHorasCertificado] = useState('');

  const handleRegister = async () => {
    // Verifica se todos os campos estão preenchidos
    if (!tipoVaga || !habilidades || !diasSemana || !horario || !horasCertificado) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:8083/api/Vagas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Tipo_vaga: tipoVaga,
          Habilidades: habilidades,
          Dias_semana: diasSemana,
          Horario: horario,
          Horas_certificado: horasCertificado,
        }),
      });

      const data = await response.json(); // Lê a resposta da API

      if (response.ok) {
        Alert.alert('Cadastro bem-sucedido', `Vaga cadastrada com sucesso!`);
        onNavigateToVagas(); // Navega de volta após o cadastro da vaga
      } else {
        Alert.alert('Erro', data.message || 'Erro ao cadastrar vaga');
      }
    } catch (error) {
      console.error('Erro ao cadastrar vaga', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Tente novamente.');
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
      
      <Text style={styles.title}>Cadastro de Vaga</Text>

      <TextInput
        style={styles.input}
        placeholder="Tipo da Vaga"
        value={tipoVaga}
        onChangeText={setTipoVaga}
      />
      <TextInput
        style={styles.input}
        placeholder="Habilidades"
        value={habilidades}
        onChangeText={setHabilidades}
      />
      <TextInput
        style={styles.input}
        placeholder="Dias da Semana"
        value={diasSemana}
        onChangeText={setDiasSemana}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
      />
      <TextInput
        style={styles.input}
        placeholder="Horas para Certificado"
        value={horasCertificado}
        onChangeText={setHorasCertificado}
      />
      
      <Button title="Cadastrar Vaga" onPress={handleRegister} color="#007bff" />
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

export default RegisterVagas;
