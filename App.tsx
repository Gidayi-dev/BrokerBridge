// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList } from 'react-native';

// // Fake deals (like a mini-database for now)
// const deals = [
//   { id: '1', title: 'House for Sale', location: 'Nairobi, Kenya' },
//   { id: '2', title: 'Stock Trade', location: 'Dubai, UAE' },
// ];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Latest Deals</Text>
//       <FlatList
//         data={deals}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.dealCard}>
//             <Text style={styles.dealTitle}>{item.title}</Text>
//             <Text style={styles.dealLocation}>{item.location}</Text>
//           </View>
//         )}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   dealCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   dealTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dealLocation: {
//     fontSize: 14,
//     color: '#666',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';

// Fake deals (like a mini-database for now)
const deals = [
  { id: '1', title: 'House for Sale', location: 'Nairobi, Kenya' },
  { id: '2', title: 'Stock Trade', location: 'Dubai, UAE' },
];

export default function App() {
  // Track what the user types in the Search Bar
  const [search, setSearch] = useState('');

  // Filter deals based on search text
  const filteredDeals = deals.filter(
    (deal) =>
      deal.title.toLowerCase().includes(search.toLowerCase()) ||
      deal.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search deals..."
        value={search}
        onChangeText={setSearch}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInput}
      />
      <Text style={styles.header}>Latest Deals</Text>
      <FlatList
        data={filteredDeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dealCard}>
            <Text style={styles.dealTitle}>{item.title}</Text>
            <Text style={styles.dealLocation}>{item.location}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  searchBarContainer: {
    backgroundColor: '#f5f5f5',
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 0,
  },
  searchBarInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  dealCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dealLocation: {
    fontSize: 14,
    color: '#666',
  },
});