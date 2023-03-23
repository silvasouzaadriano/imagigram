import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {View, TextInput, Button} from 'react-native';

const Register = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};

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