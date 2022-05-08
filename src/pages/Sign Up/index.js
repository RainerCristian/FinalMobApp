import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" />
      <View style={styles.contentWrapper}>
        <View style={styles.addPhoto}>
          <Text>Add Photo</Text>
        </View>

        <TextInput title="Full Name" placeholder="Type your full name" />
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <TextInput title="Password" placeholder="Type your password" />
        <Button title="Continue" />
        <Text style={styles.Text}>Already have account?</Text>
        <Button title="Sign In" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: '#FEC58C',
    peddingHorizontal: 24,
  },

  Text: {
    textAlign: 'center',
  },

  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
});
