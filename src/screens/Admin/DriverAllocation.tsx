import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For back icon

const DriverAllocation = () => {
  const [driverName, setDriverName] = useState('');
  const [cabNumber, setCabNumber] = useState('BR 08 1369');
  const [cabModel, setCabModel] = useState('Innova Crysta, Xylo');
  
  const navigation = useNavigation();

  const handleDriverAllocation = () => {
    // Handle the driver allocation logic
    console.log('Driver allocated:', driverName, cabNumber, cabModel);
  };

  const handleCancelBooking = () => {
    // Handle the cancel booking logic
    console.log('Booking cancelled');
  };

  const goBack = () => {
    navigation.goBack(); // Navigate back when back button is pressed
  };

  return (
    <View className="flex-1 p-5 bg-white">
      {/* Back Button */}
      <TouchableOpacity className="mb-4 self-start" onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-center mb-6">Driver Details</Text>

      {/* Driver Name Input */}
      <Text className="text-lg font-semibold mb-2">Driver Name</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-5"
        placeholder="Enter the driver name"
        value={driverName}
        onChangeText={(text) => setDriverName(text)}
      />

      {/* Cab Number */}
      <Text className="text-lg font-semibold mb-2">Cab Number</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-5"
        placeholder="Enter the cab number"
        value={cabNumber}
        onChangeText={(text) => setCabNumber(text)}
      />

      {/* Cab Model */}
      <Text className="text-lg font-semibold mb-2">Cab Model</Text>
      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-5"
        placeholder="Enter the cab model"
        value={cabModel}
        onChangeText={(text) => setCabModel(text)}
      />

      {/* Buttons */}
      <View className="flex-row justify-between">
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg flex-1 mr-2" onPress={handleDriverAllocation}>
          <Text className="text-white text-center font-bold">Allocate Driver</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-red-500 p-4 rounded-lg flex-1 ml-2" onPress={handleCancelBooking}>
          <Text className="text-white text-center font-bold">Cancel Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverAllocation;
