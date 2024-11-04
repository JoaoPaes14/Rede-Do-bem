import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const TelaVagas = () => {
    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/logo.jpg')} // Altere para o caminho correto do logotipo
                style={styles.logo}
                resizeMode="cover"
            />

            <View style={styles.divider} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Farol na quebrada:</Text>
                    <Text style={styles.itemText}>- Vaga para educador social em Lutas;</Text>
                    <Text style={styles.itemText}>- 6 horas semanais;</Text>
                    <Text style={styles.itemText}>- Seg, Quarta e Sexta;</Text>
                    <Text style={styles.itemText}>- 17 às 19 horas;</Text>
                    <Text style={styles.itemText}>- 24 horas mensais no certificado;</Text>
                    <Text style={styles.itemCode}>cod: 012203</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Abrigo Flora e Fauna:</Text>
                    <Text style={styles.itemText}>- Vaga para banho em pets;</Text>
                    <Text style={styles.itemText}>- 2 a 4 horas mensais;</Text>
                    <Text style={styles.itemText}>- Um dia no mês;</Text>
                    <Text style={styles.itemText}>- 8 às 12;</Text>
                    <Text style={styles.itemText}>- 4 horas no certificado;</Text>
                    <Text style={styles.itemCode}>cod: 012205</Text>
                </View>
            </ScrollView>


            <View style={styles.footer}>
                <Text style={styles.footerIcon}>🏠</Text>
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
        height: '30%',
        marginBottom: 10,
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#007bff',
        marginBottom: 20,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#f1f1f1',
        width: '90%',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    itemCode: {
        fontSize: 12,
        color: '#888',
        textAlign: 'right',
        marginTop: 10,
    },
    footer: {
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#f8f8f8',
    },
    footerIcon: {
        fontSize: 24,
        color: '#007bff',
    },
});

export default TelaVagas;
