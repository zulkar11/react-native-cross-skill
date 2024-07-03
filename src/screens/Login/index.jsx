import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import logo from '../../assets/image/logo.png';
import {CustomText} from '../../components/CustomText';

const LoginPage = () => {
  const [loginState, setLoginState] = useState({
    username: '',
    password: '',
  });

  const navigation = useNavigation();

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={logo} />
      </View>

      <CustomText text="Phone" />
      <TextInput
        style={styles.input}
        placeholder="phone"
        onChangeText={text => setLoginState({...loginState, username: text})}
        value={loginState.username}
      />

      <CustomText text="Password" />

      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={text => setLoginState({...loginState, password: text})}
        value={loginState.password}
        secureTextEntry // Hide the entered text for password security
      />

      <Text
        style={[styles.title, styles.forgetText]}
        onPress={() => {
          navigation.navigate('Reset');
        }}>
        Forget Password?
      </Text>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={[styles.title, styles.signUp]}>
        Don't have an account?
        <Text
          onPress={() => {
            navigation.navigate('Reset');
          }}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    marginTop: 67,
    marginBottom: 78,
    height: 80,
  },

  input: {
    height: 50,
    backgroundColor: '#EEEEEE',
    padding: 16,
  },
  signInButton: {
    backgroundColor: '#164194',
    padding: 10,
    borderRadius: 5,
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DMSans',
  },
  forgetText: {
    textAlign: 'right',
    marginTop: 7,
    marginBottom: 47,
  },
  signUp: {
    textAlign: 'center',
    marginTop: 40,
  },
});

export default LoginPage;
