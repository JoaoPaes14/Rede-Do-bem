import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screeens/loginScreen.js';
import RegisterScreenOrg from './src/screeens/RegisterScreenInstituicao.js';


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
