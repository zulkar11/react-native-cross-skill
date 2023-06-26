import {Text, View, FlatList, Button} from 'react-native';
import { useState, useEffect } from 'react';
export default function List() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {

    //       fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //             setLoading(false);
    //         }).catch((error) => {
    //             console.error(error);
    //         })

    //   }, []);





    return (
        <View>
            <Text style={{fontSize: 30, textAlign: 'center'}}>
                BJIT Cross skill training
            </Text>

            <Button title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"/>
     

        </View>
    );
    }

