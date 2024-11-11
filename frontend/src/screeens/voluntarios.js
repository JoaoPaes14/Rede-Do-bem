import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

// Supondo que você tenha uma lista de voluntários passada como props
const Voluntarios = ({ voluntarios, onNavigateHome }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Voluntários Candidatos</Text>

        <ScrollView style={styles.scrollView}>
          {voluntarios && voluntarios.length > 0 ? (
              voluntarios.map((voluntario, index) => (
                  <View key={index} style={styles.volunteerCard}>
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
