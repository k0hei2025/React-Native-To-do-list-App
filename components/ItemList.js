import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { View, Button, Text } from 'react-native'

export default function ItemList(props) {

  useEffect(() => {
    console.log('at item list', props.data)
  }, [])

  return (
    <View style={{ color: 'black', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', flexDirection: 'row', justifyContent: 'space-between', margin: 7 }}>
      <Text>{props.data.message}</Text>
      <Button title='Delete' onPress={props.deleteItem.bind(this, props.data.id)}>Delete</Button>
    </View>
  )
}
