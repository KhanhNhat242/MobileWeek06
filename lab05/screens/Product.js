import { useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const prd = [
    {
        name: 'Pinarello',
        path: require('../assets/bike1.png'),
        price: '$ 1800',
        type: 'mountain',
    },
    {
        name: 'Pina Mountain',
        path: require('../assets/bike2.png'),
        price: '$ 1700',
        type: 'mountain',
    },
    {
        name: 'Pina Bike',
        path: require('../assets/bike3.png'),
        price: '$ 1500',
        type: 'roadbike',
    },
    {
        name: 'Pinarello',
        path: require('../assets/bike4.png'),
        price: '$ 1900',
        type: 'roadbike',
    },
    {
        name: 'Pinarello',
        path: require('../assets/bike5.png'),
        price: '$ 2700',
        type: 'roadbike',
    },
    {
        name: 'Pinarello',
        path: require('../assets/bike1.png'),
        price: '$ 1350',
        type: 'mountain',
    },
]

const Item = ({name, path, price, navigation}) => (
    <TouchableOpacity style={styles.productWrapper} onPress={() => {
        // console.log(path)
        navigation.navigate('ProductDetail', {path: path, name: name, price: price})
        }}>
        <Image style={styles.img} source={path} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
)

function Product({ navigation }) {
    const [flag, setFlag] = useState(0)
    const [prdt, setPrdt] = useState([])

    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>The world’s Best Bike</Text>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={() => setFlag(0)}>
                    <Text style={{color: `${flag == 0 ? 'red' : '#ccc'}`}}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    setFlag(1)
                    setPrdt(prd.filter((prd) => prd.type === 'roadbike'))
                }}>
                    <Text style={{color: `${flag == 1 ? 'red' : '#ccc'}`}}>Roadbike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    setFlag(2)
                    setPrdt(prd.filter((prd) => prd.type === 'mountain'))
                }}>
                    <Text style={{color: `${flag == 2 ? 'red' : '#ccc'}`}}>Mountain</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <FlatList data={flag == 0 ? prd : prdt} keyExtractor={item => item.price} renderItem={({item}) => <Item path={item.path} name={item.name} price={item.price} navigation={navigation} />} numColumns={2}/>
            </SafeAreaView>
        </View>
     );
}

export default Product;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        color: '#E94141',
        fontWeight: 700,
        fontSize: 25,
        textAlign: 'left',
        // marginTop: 30,
        marginBottom: 30,
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        borderWidth: 1,
        borderColor: 'rgba(233, 65, 65, 0.53)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 32,
    },
    // btnTxt: {
    //     color: '#E94141',
    // },
    productWrapper: {
        width: '44%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    img: {
        width: 134,
        height: 124,
    },
})