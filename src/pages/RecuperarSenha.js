import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const RecuperarSenha = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    // Aqui você pode adicionar a lógica para enviar um link de recuperação de senha para o email fornecido
    console.log('Enviando link de recuperação...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECUPERAR SENHA</Text>
      <View style={styles.recoverBox}>
        <TextInput
          style={styles.input}
          placeholder="Email Cadastrado"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Enviar Link para Recuperação" onPress={handleRecoverPassword} />
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Voltar a Página Inicial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  recoverBox: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  options: {
    marginTop: 20,
  },
  link: {
    color: 'blue',
  },
});

export default RecuperarSenha;
