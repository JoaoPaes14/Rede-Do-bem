import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const RegisterScreenVoluntario = ({ onNavigateToLogin }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [qtd_horas_disponiveis, setQtd_horas_disponiveis] = useState('');
    const [showMensagemSucesso, setMensagemSucesso] = useState(false);

    const handleCadastro = async () => {
        // Verifica se as senhas coincidem
        if (senha !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8088/api/voluntarios/voluntario', {
                Nome: nome,
                Idade: idade,
                Email: email,
                Senha: senha,
                Qtd_horas_disponiveis: qtd_horas_disponiveis
            });

            console.log('Resposta da API:', response.data);
            setMensagemSucesso(true);
            setTimeout(() => {
                setMensagemSucesso(false);
                onNavigateToLogin(); // Redireciona para a tela de login após o cadastro
            }, 2000); // A mensagem desaparece após 2 segundos
        } catch (error) {
            console.error('Erro ao cadastrar:', error.response ? error.response.data : error.message);
            Alert.alert('Erro', `Erro ao cadastrar: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="IDADE"
                placeholderTextColor="#d9edf3"
                value={idade}
                onChangeText={setIdade}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="E-MAIL"
                placeholderTextColor="#d9edf3"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="SENHA"
                placeholderTextColor="#d9edf3"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="CONFIRMAR SENHA"
                placeholderTextColor="#d9edf3"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="HORAS DISPONÍVEIS"
                placeholderTextColor="#d9edf3"
                value={qtd_horas_disponiveis}
                onChangeText={setQtd_horas_disponiveis}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>


            {showMensagemSucesso && (
                <View style={styles.successMessage}>
                    <Text style={styles.successMessageText}>Cadastro realizado com sucesso!</Text>
                </View>
            )}
        </ScrollView>
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
        height: '30%',
    },
    input: {
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#646262',
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginBottom: 10,
        borderRadius: 50,
        color: '#fff',
        fontSize: 12,
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
    successMessage: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
    },
    successMessageText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RegisterScreenVoluntario;
