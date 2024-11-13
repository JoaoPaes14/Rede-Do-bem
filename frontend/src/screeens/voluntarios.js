import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const Voluntarios = ({ onNavigateHome }) => {
  // Dados fixos de voluntários
  const voluntarios = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      quantidadeHoras: 10,
      diasSemana: 'Segunda, Quarta, Sexta',
      quantidadeHorasComplementares: 5,
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      quantidadeHoras: 15,
      diasSemana: 'Terça, Quinta',
      quantidadeHorasComplementares: 3,
    },
    {
      id: 3,
      nome: 'Carlos Pereira',
      email: 'carlos.pereira@example.com',
      quantidadeHoras: 20,
      diasSemana: 'Sábado, Domingo',
      quantidadeHorasComplementares: 8,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voluntários Candidatos</Text>

      <ScrollView style={styles.scrollView}>
        {voluntarios.length > 0 ? (
          voluntarios.map((voluntario) => (
            <View key={voluntario.id} style={styles.volunteerCard}>
              <Text style={styles.volunteerText}>Nome: {voluntario.nome}</Text>
              <Text style={styles.volunteerText}>Email: {voluntario.email}</Text>
              <Text style={styles.volunteerText}>Horas Oferecidas: {voluntario.quantidadeHoras}</Text>
              <Text style={styles.volunteerText}>Dias da Semana: {voluntario.diasSemana}</Text>
              <Text style={styles.volunteerText}>Horas Complementares: {voluntario.quantidadeHorasComplementares}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noVolunteersText}>Nenhum voluntário se cadastrou ainda.</Text>
        )}
      </ScrollView>

      <Button title="Voltar para Home" onPress={onNavigateHome} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9edf3',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
  volunteerCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  volunteerText: {
    fontSize: 16,
    color: '#333',
  },
  noVolunteersText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default Voluntarios;