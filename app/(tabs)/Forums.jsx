import React from 'react';
import { View, TextInput,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon set you want to use

function Forums() {
  const handlePress = () => {
    // Add your button press handling logic here
    console.log('Button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
          <Text>Karthik</Text>
          <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, dolores enim magni sed, numquam, excepturi sint dolore maxime odit rem consequuntur ad! Fugit, porro iste laborum maiores deserunt libero ipsum?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Place your query' />
        <TouchableOpacity style={styles.iconButton} onPress={handlePress}>
          <Icon name="send" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  iconButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default Forums;
