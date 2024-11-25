import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const Voluntarios = ({ onNavigateToOrgMenu }) => {
    const [voluntarios, setVoluntarios] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchVoluntarios = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:8088/api/voluntarios/info'); 
            console.log('Resposta da API:', response.data); 
            setVoluntarios(response.data); 
        } catch (err) {
            setError('Erro ao buscar os voluntários.');
            console.error('Erro ao buscar voluntários:', err);
        } finally {
            setLoading(false);
        }
    };

    // Usar o useEffect para chamar a API ao carregar o componente
    useEffect(() => {
        fetchVoluntarios();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007bff" />
                <Text style={styles.loadingText}>Carregando voluntários...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
                <Button title="Tentar novamente" onPress={fetchVoluntarios} color="#007bff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voluntários do Dia</Text>

            {voluntarios.length > 0 ? (
                voluntarios.map((voluntario, index) => (
                    <View key={index} style={styles.volunteerCard}>
                        <Text style={styles.volunteerText}><Text style={styles.label}>Nome:</Text> {voluntario.nome}</Text>
                        <Text style={styles.volunteerText}><Text style={styles.label}>Email:</Text> {voluntario.email}</Text>
                        <Text style={styles.volunteerText}><Text style={styles.label}>Horas Oferecidas:</Text> {voluntario.Qtd_horas_disponiveis}</Text>
                        <Text style={styles.volunteerText}><Text style={styles.label}>Idade:</Text> {voluntario.idade}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.noVolunteersText}>Nenhum voluntário encontrado.</Text>
            )}

            <View style={styles.buttonContainer}>
                <Button title="Voltar para Home" onPress={onNavigateToOrgMenu} color="#007bff" />
            </View>
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
        width: '100%',
    },
    volunteerText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
    },
    noVolunteersText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});

export default Voluntarios;
