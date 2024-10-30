import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/screeens/loginScreen.js';
import RegisterScreenOrg from './src/screeens/RegisterScreenInstituicao.js';
import IntCadstradaScreen from './src/screeens/IntCadastradaScreen.js';
import CadastroVagas from './src/screeens/CadastroVagas.js';

const App = () => {
    const [screen, setScreen] = useState('login');  // Controla qual tela deve ser exibida
  
    // Funções de navegação
    const handleNavigateToVolunt = () => {
        setScreen('instituicoesCadastradas');  // Navega para a tela de instituições cadastradas
    };
  
    const handleNavigateToCadastro = () => {
        setScreen('register');  // Navega para a tela de cadastro de organizações
    };
  
    const handleNavigateToLogin = () => {
        setScreen('login');  // Volta para a tela de login
        <StatusBar style="auto" />
    };
    const handleNavigateToVagas = () => {
      setScreen('vagas'); // Navega para a tela de cadastro de vagas
  };
    return (
        <View style={styles.container}>
            {/* Tela de Login */}
            {screen === 'login' && (
                <LoginScreen onNavigateToVolunt={handleNavigateToVolunt} onNavigateToCadastro={handleNavigateToCadastro} />
            )}
            
            {/* Tela de Instituições Cadastradas */}
            {screen === 'instituicoesCadastradas' && (
                <IntCadstradaScreen onNavigateToCadastro={handleNavigateToCadastro} />
            )}
  
            {/* Tela de Registro de Organização */}
            {screen === 'register' && (
                <RegisterScreenOrg onNavigateToResgister={handleNavigateToLogin} />
            )}
  
            {/* Tela de Cadastro de Vagas */}
            {screen === 'vagas' && (
                <CadastroVagas onNavigateToVagas={handleNavigateToVagas} />
            )}
        </View>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default App;
