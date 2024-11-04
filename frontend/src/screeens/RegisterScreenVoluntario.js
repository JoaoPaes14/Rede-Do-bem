import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreenVoluntario = ({ onNavigateToLogin }) => {
    const [Nome, setNome] = useState('');
    const [Idade, setIdade] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfirmarSenha, setConfirmarSenha] = useState('');
    const [HorasDisponiveis, setHorasDisponiveis] = useState('');

    const handleRegister = async () => {
        if (Senha !== ConfirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:808/api/register', {
                Nome,
                Idade,
                Email,
                Senha,
                HorasDisponiveis,
            });
            console.log('Resposta da API:', response.data); // Log da resposta
            Alert.alert('Cadastro bem-sucedido', `Bem-vindo, ${response.data.name}!`);
            onNavigateToLogin(); // Navegar para a tela de login
        } catch (error) {
            console.error('Erro ao cadastrar:', error.response ? error.response.data : error.message);
            Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/logo.jpg')}
                style={styles.logo}
                resizeMode="cover"
            />

            <View style={styles.divider} />

            <TextInput
                style={styles.input}
                placeholder="NOME"
                placeholderTextColor="#d9edf3"
                value={Nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="IDADE"
                placeholderTextColor="#d9edf3"
                value={Idade}
                onChangeText={setIdade}
                keyboardType="numeric"
            />
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
            <TextInput
                style={styles.input}
                placeholder="CONFIRMAR SENHA"
                placeholderTextColor="#d9edf3"
                value={ConfirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="HORAS DISPONÍVEIS"
                placeholderTextColor="#d9edf3"
                value={HorasDisponiveis}
                onChangeText={setHorasDisponiveis}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onNavigateToLogin}>
                <Text style={styles.toggleText}>Já tem uma conta? Faça login</Text>
            </TouchableOpacity>
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
        height: '40%',
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
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleText: {
        marginTop: 1,
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});

export default RegisterScreenVoluntario;
