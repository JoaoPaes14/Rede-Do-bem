import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OrgMenu = ({ onNavigateToVagas, onNavigateToPrincipal }) => {

    return (
        <View style={styles.container}>

            {/* Botão de Sair (ícone no canto superior esquerdo) */}
            <TouchableOpacity style={styles.exitIcon} onPress={onNavigateToPrincipal}>
                <Image
                    source={require('../assets/EXIT.png')}
                    style={styles.exitImage}
                />
            </TouchableOpacity>

            {/* Imagem no topo da tela */}
            <Image
                source={require('../assets/logo.jpg')}
                style={styles.logo}
                resizeMode="cover"
            />
            {/* Linha azul */}
            <View style={styles.divider} />

            {/* Avatar do voluntário */}
            <View style={styles.volunteerContainer}>
                <Image
                    source={require('../assets/Org.png')}
                    style={styles.avatar}
                />
                <Text style={styles.volunteerText}>INSTITUIÇÃO</Text>
            </View>

            {/* Instituições cadastradas */}
            <Text style={styles.sectionTitle}>INSTITUIÇÕES CADASTRADAS:</Text>
            <View style={styles.institutionContainer}>
                <Image source={require('../assets/farol.png')} style={styles.institution} />
                <Image source={require('../assets/anjos.png')} style={styles.institution} />
                <Image source={require('../assets/gerando_falcoes.png')} style={styles.institution} />
            </View>


            {/* Botão para levar à tela de cadastro */}
            <TouchableOpacity style={styles.button} onPress={onNavigateToVagas}>
                <Text style={styles.buttonText}>Cadastrar Vaga</Text>
            </TouchableOpacity>


           

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '30%',
        alignSelf: 'center',

    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#007bff',
        alignSelf: 'center',

    },
    volunteerContainer: {
        alignItems: 'center',
        marginVertical: 40,
        
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    volunteerText: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    institutionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        width: '90%',
    },
    institution: {
        width: 80,
        height: 80,
    },
    button: {
        backgroundColor: '#646262',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        width: '50%',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    exitIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#d9edf3',
    },
    exitImage: {
        width: 30,
        height: 30,

    },
});

export default OrgMenu;
