import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screeens/loginScreen.js';
import RegisterScreenOrg from './src/screeens/RegisterScreenInstituicao.js';
import IntCadstradaScreen from './src/screeens/IntCadastradaScreen.js';
import QuadrodeVagas from './src/screeens/QuadrodeVagas.js';
import Voluntarios from "./src/screeens/voluntarios";

const App = () => {
  const [screen, setScreen] = useState('login');  // Controla qual tela deve ser exibida

  // Funções de navegação
  const handleNavigateToInst = () => {
    setScreen('instituicoesCadastradas');  // Navega para a tela de instituições cadastradas
  };

  const handleNavigateToCadastro = () => {
    setScreen('register');  // Navega para a tela de cadastro de organizações
  };

  const handleNavigateToLogin = () => {
    setScreen('login');  // Volta para a tela de login
  };

  const handleNavigateToVagas = () => {
    setScreen('vagas');
  };

  const handleNavigateToVolunt = () => {
    setScreen('voluntarios');
  };

  return (
      <View style={styles.container}>
        {/* Tela de Login */}
        {screen === 'login' && (
            <LoginScreen onNavigateToInst={handleNavigateToInst} onNavigateToCadastro={handleNavigateToCadastro} />
        )}

        {/* Tela de Instituições Cadastradas */}
        {screen === 'instituicoesCadastradas' && (
            <IntCadstradaScreen
                onNavigateToCadastro={handleNavigateToCadastro}
                onNavigateToVagas={handleNavigateToVagas}
                onNavigateToVolunt={handleNavigateToVolunt}
            />
        )}

        {/* Tela de Voluntários */}
        {screen === 'voluntarios' && (
            <Voluntarios
                onNavigateToVoluntarios={handleNavigateToVolunt}
                onNavigateHome={handleNavigateToLogin}
            />
        )}

        {/* Tela de Registro de Organização */}
        {screen === 'register' && (
            <RegisterScreenOrg onNavigateToResgister={handleNavigateToLogin} />
        )}

        {/* Tela de Vagas */}
        {screen === 'vagas' && (
            <QuadrodeVagas onNavigateToVagas={handleNavigateToVagas} />
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
