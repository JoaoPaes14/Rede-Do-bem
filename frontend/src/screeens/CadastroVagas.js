import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const VolunteerRegistrationScreen = ({ onNavigateHome }) => {
  const [institutionName, setInstitutionName] = useState('');
  const [requiredHours, setRequiredHours] = useState('');
  const [availableDays, setAvailableDays] = useState('');
  const [complementaryHours, setComplementaryHours] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');

  const handleSubmit = () => {
    // Validação básica
    if (!institutionName || !requiredHours || !availableDays || !complementaryHours || !serviceDescription) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los
    Alert.alert('Sucesso', 'Vaga cadastrada com sucesso!');

    // Limpar campos após o envio
    setInstitutionName('');
    setRequiredHours('');
    setAvailableDays('');
    setComplementaryHours('');
    setServiceDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Vaga para Voluntário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da Instituição"
        value={institutionName}
        onChangeText={setInstitutionName}
      />
      <TextInput
        style={styles.input}
        placeholder="Horas Necessárias"
        value={requiredHours}
        onChangeText={setRequiredHours}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Dias da Semana (ex: Seg, Ter, Qua)"
        value={availableDays}
        onChangeText={setAvailableDays}
      />
      <TextInput
        style={styles.input}
        placeholder="Horas Complementares"
        value={complementaryHours}
        onChangeText={setComplementaryHours}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Serviço"
        value={serviceDescription}
        onChangeText={setServiceDescription}
      />

      <Button title="Cadastrar Vaga" onPress={handleSubmit} color="#007bff" />
      <Button title="Voltar para Home" onPress={onNavigateHome} color="#6c757d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default CadastroVagas;