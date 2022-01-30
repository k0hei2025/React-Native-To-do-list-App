
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react'
import ItemList from './components/ItemList'

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
  }
  const DeleteHandler = (trigerId) => {
    let tempArr = text.filter((i) => i.id !== trigerId)
    setText(tempArr)
    console.log('at delete handler', tempArr)
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
        {/* <ScrollView style={styles.listContainer}>
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
        </ScrollView> */}
        <FlatList key={(item, index) => item.id} data={text} renderItem={(i) => (
          <ItemList deleteItem={DeleteHandler} setArr={setText} arr={text} data={i.item} />
        )
        }>

        </FlatList>

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
