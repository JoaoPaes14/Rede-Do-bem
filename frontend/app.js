import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from 'C:/Users/welli/Desktop/rede/frontend/src/screeensloginScreen.js';
import RegisterScreenOrg from 'C:/Users/welli/Desktop/rede/frontend/src/RegisterScreenInstituicao.js';
import IntCadstradaScreen from 'C:/Users/welli/Desktop/rede/frontend/src/IntCadstradaScreen.js';



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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
