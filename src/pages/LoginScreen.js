import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    const data = {
      usuarioId: 1,
      username: username,
      password: password
    };

    setLoading(true);

    try {
      const response = await axios.post('https://localhost:7109/api/Usuarios/Authenticate/authenticate', data);
      const token = response.data.token;
      Alert.alert('Login successful', `Token: ${token}`);
      // Navegar para outra tela se necessário
      // Exemplo: navigation.navigate('Home');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Carregando...</Text>
        </View>
      ) : (
        <>
          {/* Adicionando a logo usando require */}
         
          <Text style={styles.loginText}>LOGIN</Text>
          <View style={styles.loginBox}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button title="Login" onPress={login} />
          </View>
          <View style={styles.options}>
            <Text style={styles.link} onPress={() => navigation.navigate('RecuperarSenha')}>
              Esqueci minha senha
            </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Registrar')}>
              Não tem conta? Registre-se
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgb(255, 223, 251)',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginBox: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  options: {
    marginTop: 20,
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default LoginScreen;
