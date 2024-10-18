import React, { useState } from 'react';
import { View, Button } from 'react-native';
import LoginScreen from 'C:/Users/welli/Desktop/rede/frontend/src/screeensloginScreen.js';
import RegisterScreen from 'C:/Users/welli/Desktop/rede/frontend/src/screeensregisterScreen.js';

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
      
    </View>
  );
  
};

export default App;
