import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../utils/Slice';
import { Data } from '../services/Data';
type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignInScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    await dispatch(login());
    //TODO
  //  await Data("a","b");
    Alert.alert('Sign In', `Welcome, ${email}`);

    //TODO
    //service callinf fn here to sign in 
  const role=email;
    if (role === 'admin') {
      navigation.navigate('AdminHome' as never);
    }
    else
    navigation.navigate('Home' as never);
  };

  return (
    <View className="flex-1 bg-[#81D742] justify-center items-center">
      <View className="absolute top-0 left-0 right-0 h-52 bg-[#81D742] rounded-b-3xl" />

      <View className="w-11/12 max-w-md bg-white rounded-xl p-5 shadow-md items-center">
        <Text className="text-3xl font-bold text-black mb-5">SIGN IN</Text>

        <Image
          source={require('../../assets/Images/logo-removebg-preview.png')}
          className="w-52 h-36 mb-5"
        />

        <TextInput
          className="border border-gray-300 rounded-full py-3 px-4 my-2 w-full text-black"
          placeholder="Email"
          placeholderTextColor="#7A7A7A"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-full py-3 px-4 my-2 w-full text-black"
          placeholder="Password"
          placeholderTextColor="#7A7A7A"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="self-end my-2"
          onPress={() => navigation.navigate('ForgotPassword' as never)}
        >
          <Text className="text-gray-500">Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#81D742] py-4 rounded-full my-5 items-center w-full"
          onPress={handleSignIn}
        >
          <Text className="text-white font-bold">SIGN IN</Text>
        </TouchableOpacity>

        <View className="items-center my-8">
          <Text className="text-gray-500 mb-4">Or Sign in with</Text>
          <View className="flex-row justify-between w-44">
            <TouchableOpacity>
              <FontAwesome name="google" size={24} color="#4285F4" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="facebook" size={24} color="#3b5998" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
          <Text className="text-center mt-5 text-gray-500">
            Don’t have an account?{' '}
            <Text className="text-[#81D742] font-bold">SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
