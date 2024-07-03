import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useUpdateUserByIdMutation} from './updateSlice';

const UpdateProfile = ({userId}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    roleId: '',
    address: '',
    city: '',
    image: null, // Assuming image is a file object
  });

  const [updateUserById, {isLoading, isError}] = useUpdateUserByIdMutation();

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    const {image, ...userData} = formData;
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('image', image);

    updateUserById({userId, userData: formData});
  };

  return (
    <View style={styles.container}>
      <Text>Update Profile</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={value => handleChange('name', value)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={value => handleChange('email', value)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={formData.mobile}
        onChangeText={value => handleChange('mobile', value)}
        placeholder="Mobile"
      />
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={value => handleChange('password', value)}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        value={formData.roleId}
        onChangeText={value => handleChange('roleId', value)}
        placeholder="Role ID"
      />
      <TextInput
        style={styles.input}
        value={formData.address}
        onChangeText={value => handleChange('address', value)}
        placeholder="Address"
      />
      <TextInput
        style={styles.input}
        value={formData.city}
        onChangeText={value => handleChange('city', value)}
        placeholder="City"
      />
      {/* File input for image */}
      <Button
        title="Update"
        onPress={handleUpdateProfile}
        disabled={isLoading}
      />
      {isError && <Text>Error updating profile: {isError.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UpdateProfile;
