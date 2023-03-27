import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app }  from '../../database/firebaseConfig';

const Register = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const auth = getAuth(app);
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      console.log(data)
    } catch (err) {
      console.log('err: ', err)
    }
  };
  
  return (
    <View>
      <TextInput placeholder='Nome' onChangeText={setName} />
      <TextInput placeholder='E-mail' onChangeText={setEmail} />
      <TextInput
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  )
};

export default Register;