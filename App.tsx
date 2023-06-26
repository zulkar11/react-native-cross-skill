import {Text, View, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response.data);
        setData(response.data.title);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}> Zulkar Nayin </Text>
      {data.map((item: any) => {
        return <Text>{item.title}</Text>;
      })}
    </View>
  );
}
