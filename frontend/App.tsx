import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/screeens/loginScreen.js';
import RegisterScreenOrg from './src/screeens/RegisterScreenInstituicao.js';
import IntCadstradaScreen from './src/screeens/IntCadastradaScreen.js';
import CadastroVagas from './src/screeens/CadastroVagas.js';
import RegisterScreenVoluntario from './src/screeens/RegisterScreenVoluntario.js';
import TelaVagas from './src/screeens/QuadrodeVagas.js';
import Voluntarios from './src/screeens/voluntario.js';

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
  const handleNavigateToVolunt1 = () => {
    setScreen('Volunt'); // Navega para a tela de cadastro de vagas
};

  
    return (
        <View style={styles.container}>
            {/* Tela de Login */}
            {screen === 'login' && (
                <LoginScreen onNavigateToVolunt={handleNavigateToVolunt} onNavigateToCadastro={handleNavigateToCadastro}onNavigateToVoluntario={handleNavigateToVoluntario} />
            )}
            
            {/* Tela de Instituições Cadastradas */}
            {screen === 'instituicoesCadastradas' && (
                <IntCadstradaScreen onNavigateToCadastro={handleNavigateToCadastro} onNavigateToQdVagas={handleNavigateToQdVagas}/>
            )}
  
            {/* Tela de Registro de Organização */}
            {screen === 'register' && (
                <RegisterScreenOrg 
                
                  onNavigateToVagas={handleNavigateToVagas} 
                />
            )}
  
            {/* Tela de Cadastro de Vagas */}
            {screen === 'vagas' && (
                <CadastroVagas onNavigateToVagas={handleNavigateToVagas} />
            )}
             {screen === 'voluntario' && (
                <RegisterScreenVoluntario  onNavigateToLogin={handleNavigateToLogin}/>
            )}
             {screen === 'QdVagas' && (
                <TelaVagas onNavigateToVolunt={handleNavigateToVolunt} />
            )}
            {screen === 'Volunt' && (
               <Voluntarios onNavigateToVolunt1={handleNavigateToVolunt1} />
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
