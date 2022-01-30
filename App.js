
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect } from 'react'

export default function App() {

  const [text, setText] = useState([])
  const [msg, setMsg] = useState('')
  const MessageRef = useRef('');


  const goalInputHandler = (event) => {
    setMsg(event)
  }

  const clickedHandler = () => {
    setText(i => [...i, {
      id: text.length + 1,
      message: msg
    }]);
    console.log(text)
  }
  const DeleteHandler = (params) => {
    let tempArr = text.filter((i) => i === params)
    setText(tempArr)
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput placeholder="Add Value"
            onChangeText={goalInputHandler} value={msg}
          />
          <Button onPress={clickedHandler} title="ADD" />
        </View>
        <ScrollView style={styles.listContainer}>
          {text.map((i) => {
            return (
              <View key={i.id} style={{ color: 'black', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', flexDirection: 'row', justifyContent: 'space-between', margin: 7 }}>
                <Text>{i.message}</Text>
                <Button title='Delete' onPress={() => {
                  let ar = text.filter(j => j.id !== i.id)
                  setText(ar)
                }}>Delete</Button>
              </View>
            )
          })}
        </ScrollView>
        {/* 
        
        <View style={styles.listContainer}>
          {text.map((i) => {
            return (
              <View key={i.id} style={{ color: 'black', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', padding: 2, margin: 1 }}>
                <Text>{i.message}</Text>
                <Button onPress={DeleteHandler(i)}>Delete</Button>
              </View>
            )
          }
          )}
        </View> */}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50
  },
  list: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',

    marginTop: 1,
    fontWeight: 'bold'
  },
  listContainer: {
    borderRadius: 1,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 5,
    marginTop: 6,
    overflow: 'scroll',
    borderRadius: 10,
    paddingBottom: 50

  }
});
