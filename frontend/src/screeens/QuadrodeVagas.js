import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

const TelaVagas = ({ onNavigateToVolunt }) => {
    const [vagas, setVagas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchVagas = async () => {
        try {
            setError(false);
            const response = await axios.get('http://localhost:8088/api/Vagas'); // Atualize com o IP do backend
            setVagas(response.data);
        } catch (err) {
            console.error('Erro ao buscar vagas:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVagas();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
              <Text style={styles.title}>Vagas Cadastradas</Text>
            <View style={styles.divider} />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text style={{ color: 'red', textAlign: 'center' }}>Erro ao carregar vagas. Tente novamente.</Text>
            ) : (
                vagas.map((vaga) => (
                    <View key={vaga.id} style={styles.card}>
                        <Text style={styles.sectionTitle}>{vaga.Tipo_vaga}:</Text>
                        <Text style={styles.itemText}>- Habilidades: {vaga.Habilidades};</Text>
                        <Text style={styles.itemText}>- Dias: {vaga.Dias_semana};</Text>
                        <Text style={styles.itemText}>- Horário: {vaga.Horario};</Text>
                        <Text style={styles.itemText}>- Horas no certificado: {vaga.Horas_certificado};</Text>
                        <Text style={styles.itemCode}>Cod: {vaga.Cod_vaga}</Text>
                    </View>
                ))
            )}
            <View style={styles.footer}>
                <TouchableOpacity onPress={onNavigateToVolunt}>
                    <Image source={require('../assets/Home.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E3E9EF',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#cccccc',
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F4F4F',
        marginBottom: 5,
    },
    itemText: {
        fontSize: 14,
        color: '#4F4F4F',
    },
    itemCode: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999999',
        marginTop: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    footerIcon: {
        width: 40,
        height: 40,
    },
});

export default TelaVagas;
