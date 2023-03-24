import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { db }  from '../../database/db';

const Register = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const auth = getAuth();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      if (data) {
        try {
          const data = await addDoc(collection(db, "users"), {
            name,
            email,
          });
        } catch (err) {
          console.log('err-Doc: ', err);
        }
      }
    } catch (err) {
      console.log('err-User: ', err)
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