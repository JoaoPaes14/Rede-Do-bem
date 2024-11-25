import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ScreenPrincipal = ({ NavigateToLoginOrg, onNavigateToLogin }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/logo.jpg')} // Substitua pelo caminho correto do logo
        style={styles.logo}
        resizeMode="cover"
      />
      <View style={styles.divider} />

      {/* Container para exibir os botões lado a lado */}
      <View style={styles.optionsRow}>
        {/* Botão de Usuário */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={onNavigateToLogin}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/volunteer_avatar.png')} // Substitua pelo caminho do ícone do usuário
              style={styles.icon}
            />
          </View>
          <Text style={styles.optionText}>VOLUNTARIO</Text>
        </TouchableOpacity>

        {/* Botão de Organização */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={NavigateToLoginOrg}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/Org.png')} // Substitua pelo caminho do ícone da organização
              style={styles.icon}
            />
          </View>
          <Text style={styles.optionText}>ORGANIZAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    height: '40%',
  },
  optionsRow: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  optionContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 35, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  icon: {
    width: 70,
    height: 70,
  },
  optionText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#007bff',
    alignSelf: 'center',
    marginBottom: 30,
  },
});

export default ScreenPrincipal;
