import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import LoginScreen from 'C:/Users/welli/Desktop/rede/frontend/src/screeensloginScreen.js';
import RegisterScreenOrg from 'C:/Users/welli/Desktop/rede/frontend/src/RegisterScreenInstituicao.js';
import IntCadstradaScreen from 'C:/Users/welli/Desktop/rede/frontend/src/IntCadstradaScreen.js';
import CadastroVagas from 'C:/Users/welli/Desktop/rede/frontend/src/CadastroVagas.js';
import RegisterScreenVoluntario from  'C:/Users/welli/Desktop/rede/frontend/src/RegisterScreenVoluntario.js';
import TelaVagas from  'C:/Users/welli/Desktop/rede/frontend/src/TelaVagas.js';


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

  const handleNavigateToVagas = () => {
      setScreen('vagas'); // Navega para a tela de cadastro de vagas
  };
  const handleNavigateToVoluntario = () => {
    setScreen('voluntario'); // Navega para a tela de cadastro de vagas
};
const handleNavigateToQdVagas = () => {
    setScreen('QdVagas'); // Navega para a tela de cadastro de vagas
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
              <RegisterScreenOrg 
                onNavigateToRegister={handleNavigateToLogin} 
                onNavigateToVagas={handleNavigateToVagas} 
              />
          )}

          {/* Tela de Cadastro de Vagas */}
          {screen === 'vagas' && (
              <CadastroVagas onNavigateToVagas={handleNavigateToVagas} />
          )}
           {screen === 'voluntario' && (
              <RegisterScreenVoluntario onNavigateToVoluntario={handleNavigateToVoluntario} />
          )}
           {screen === 'QdVagas' && (
              <TelaVagas onNavigateToQdVagas={handleNavigateToQdVagas} />
          )}

          <StatusBar style="auto" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

export default App;
