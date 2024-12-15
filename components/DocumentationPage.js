import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { database, ref, set, push, onValue } from '../DataBase/firebaseConfig'; // Import firebase setup
// firebaseConfig.js file is where you initialize Firebase with your credentials and set up the database.

// DocumentationPage component
const DocumentationPage = () => {
   
      const [note, setNote] = useState('');
      const [notes, setNotes] = useState([]);
    
// Save note when user press "Save Note" button. 
// save data into firebase using set() method. 
  const saveNote = () => {
    if (note.trim() === '') return; // Prevent saving empty notes
    const notesRef = ref(database, 'notes/');
    const newNoteRef = push(notesRef); // Generate a new key for the note
    set(newNoteRef, { content: note })  // Save the note under the generated key
      .then(() => setNote(''))  // Clear the input after saving
      .catch((error) => console.error('Error saving note:', error));
  };

  // onValue() : fetch data from firebase in real time. : available to see any chagnes 
  // without refreshing the app. 
  useEffect(() => {
    const notesRef = ref(database, 'notes/');
    const unsubscribe = onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      const notesList = data ? Object.entries(data).map(([key, value]) => ({ id: key, ...value })) : [];
      setNotes(notesList);  // Update the state with the fetched notes
    });
    return () => unsubscribe();  // Cleanup on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Notes</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your note here..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save Note" onPress={saveNote} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.note}>{item.content}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 },
  note: { padding: 10, backgroundColor: '#f9f9f9', marginBottom: 5, borderRadius: 5 },
});

export default DocumentationPage;