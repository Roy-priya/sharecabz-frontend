
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BookingDetails from "../../components/BookingDetails";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface BookingDetail {
  name: string;
  bookingId: string;
}

interface BookingDetailsScreenProps {
  bookings: BookingDetail[];
  onPrevious: () => void;
  onNext: () => void;
  onPressViewDetails: (bookingId: string) => void;
}
const AdminHome = () => {
  // Sample bookings data
  const bookings = [
    { name: "Samuel Peterson", bookingId: "BOD132763" },
    { name: "Megan Watson", bookingId: "BOD132768" },
    // Add more bookings here
  ];

  // Function to handle view details press
  const handleViewDetails = (bookingId: string) => {
    // API call or navigation to details page can be handled here
    console.log("View details for booking ID:", bookingId);
  };

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const navigation = useNavigation();
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const renderItem = ({ item }: { item: BookingDetail }) => (
    <TouchableOpacity onPress={() => handlePress()} style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.bookingId}>{item.bookingId}</Text>
      <Ionicons name="eye-outline" size={24} color="#000" />
    </TouchableOpacity>
  );

  const handlePress = () => {
    navigation.navigate("UserDetailPage" as never);
  };
  const onPrevious = () => {
    console.log("Previous button pressed");
  }
  const onNext = () => {
    console.log("Next button pressed");
  }
  return (
    <SafeAreaView className="flex-1 p-5 pt-5" >
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <Text style={styles.searchText}>Search By booking Id...</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Booking Details</Text>

      <View style={styles.listHeader}>
        <TouchableOpacity onPress={toggleSortOrder} style={styles.sortButton}>
          <Text style={styles.headerText}>Name</Text>
          <Ionicons
            name={sortOrder === "asc" ? "arrow-up" : "arrow-down"}
            size={16}
            color="#000"
          />
        </TouchableOpacity>
        <Text style={styles.headerTextLeft}>Booking ID</Text>
      </View>

      <FlatList
        data={sortedBookings}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.bookingId}-${index}`}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onPrevious}>
          <Text style={styles.buttonTextPrevious}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={onNext}
        >
          <Text style={styles.buttonTextNext}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
/*
  return (
    <SafeAreaView className="flex-1 p-5 pt-5">
      <View className="flex-row"></View>
      <BookingDetails
        bookings={bookings}
        onPressViewDetails={handleViewDetails}
      />
    </SafeAreaView>
  );*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchText: {
    marginLeft: 10,
    color: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
  headerTextLeft: {
    fontWeight: "bold",
    marginRight: 63,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    flex: 1,
  },
  bookingId: {
    flex: 1,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    width: 150,
    display: "flex",
    justifyContent: "center",
  },
  nextButton: {
    backgroundColor: "#81D742",
    height: 50,
  },
  buttonTextNext: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonTextPrevious: {
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AdminHome;
