import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'usuario' && password === '1234') {
      Alert.alert('Sucesso', 'Login bem-sucedido!');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Usuário:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Senha:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}
