import React, { useState } from 'react';
import { View, Button } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleNavigateToRegister = () => {
    setShowLogin(false);
  };

  const handleNavigateToLogin = () => {
    setShowLogin(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {showLogin ? (
        <LoginScreen onNavigateToRegister={handleNavigateToRegister} />
      ) : (
        <RegisterScreen onNavigateToLogin={handleNavigateToLogin} />
      )}
      <Button
        title={showLogin ? "Cadastrar-se" : "Voltar para Login"}
        onPress={() => setShowLogin(!showLogin)}
      />
    </View>
  );
};

export default App;
