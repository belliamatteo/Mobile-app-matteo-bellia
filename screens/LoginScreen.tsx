import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email</Text>
      <Text>Password</Text>
      <Button
        title="Log in"
        onPress={() => navigation.navigate('ListRepos')}
      />
    </View>
  );
};