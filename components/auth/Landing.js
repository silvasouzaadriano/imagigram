import * as React from 'react';
import {Text, View, Button} from 'react-native';


const Landing = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{ marginBottom: '1rem'}}>Welcome to Imagigram</Text>
    <View style={{marginBottom: '1rem'}}>
      <Button
        style={{marginBottom: '1rem'}}
        icon='account-plus-outline'
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
    
    <Button
      icon='login-variant'
      title="Login"
      onPress={() => navigation.navigate('Login')}
    />

  </View>
);

export default Landing;