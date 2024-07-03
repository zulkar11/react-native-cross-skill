import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useResetPasswordMutation} from './resetSlice';
const ResetPassword = () => {
  const [resetPassword, {isLoading, isError}] = useResetPasswordMutation();
  const navigation = useNavigation();

  const handleBackToLogin = () => {
    // Navigate back to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.instructions}>
        Please enter your mobile number and submit to get a new password on your
        mobile.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
      />

      <TouchableOpacity onPress={handleBackToLogin} style={styles.resetButton}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0C1A30',
    marginBottom: 11,
    textAlign: 'left',
  },
  instructions: {
    fontSize: 14,
    color: '#838589',
    marginBottom: 34,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  resetButton: {
    backgroundColor: '#164194',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetPassword;
