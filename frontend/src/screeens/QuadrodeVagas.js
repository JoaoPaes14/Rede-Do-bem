import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView ,TouchableOpacity} from 'react-native';

const TelaVagas = ({ onNavigateToVolunt }) => {
    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Image
                source={require('../assets/logo.jpg')} 
                style={styles.logo}
                resizeMode="cover"
            />
            <View style={styles.divider} />

            {/* Cartão de Vaga: Farol na quebrada */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Farol na quebrada:</Text>
                <Text style={styles.itemText}>- Vaga para educador social em Lutas;</Text>
                <Text style={styles.itemText}>- 6 horas semanais;</Text>
                <Text style={styles.itemText}>- Seg, Quarta e Sexta;</Text>
                <Text style={styles.itemText}>- 17 às 19 horas;</Text>
                <Text style={styles.itemText}>- 24 horas mensais no certificado;</Text>
                <Text style={styles.itemCode}>cod: 012203</Text>
            </View>

            {/* Cartão de Vaga: Abrigo Flora e Fauna */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Abrigo Flora e Fauna:</Text>
                <Text style={styles.itemText}>- Vaga para banho em pets;</Text>
                <Text style={styles.itemText}>- 2 a 4 horas mensais;</Text>
                <Text style={styles.itemText}>- Um dia no mês;</Text>
                <Text style={styles.itemText}>- 8 às 12;</Text>
                <Text style={styles.itemText}>- 4 horas no certificado;</Text>
                <Text style={styles.itemCode}>cod: 012205</Text>
            </View>
  {/* Botão de navegação para a tela de "Home" */}
  <View style={styles.footer}>
                <TouchableOpacity onPress={onNavigateToVolunt}>
                    <Image
                        source={require('../assets/Home.png')} // Adicione uma imagem de casinha em '../assets/home-icon.png'
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E3E9EF',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: 200, // Altura fixa para melhor adaptação em várias telas
      },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#cccccc',
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F4F4F',
        marginBottom: 5,
    },
    itemText: {
        fontSize: 14,
        color: '#4F4F4F',
    },
    itemCode: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999999',
        marginTop: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    footerIcon: {
        width: 40,
        height: 40,
    },
});

export default TelaVagas;
