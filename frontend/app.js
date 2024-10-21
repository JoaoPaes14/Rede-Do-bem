import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from 'C:/Users/welli/Desktop/rede/frontend/src/screeensloginScreen.js';
import RegisterScreenOrg from 'C:/Users/welli/Desktop/rede/frontend/src/RegisterScreenInstituicao.js';

const App = () => {
    const [showLogin, setShowLogin] = useState(true);
    
    const handleNavigateToRegister = () => {
        setShowLogin(false); // Navega para a tela de registro
    };

    const handleNavigateToLogin = () => {
        setShowLogin(true); // Volta para a tela de login
    };

    return (
        <View style={styles.container}>
            {showLogin ? (
                <LoginScreen onNavigateToRegister={handleNavigateToRegister} />
            ) : (
                <RegisterScreenOrg onNavigateToLogin={handleNavigateToLogin} />
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
