import { Image, StyleSheet, Text, View } from "react-native";

const Product2 = props => {
    return ( 
        <View style={styles.productWrapper}>
            <Image style={styles.productImg} source={props.pathImg} />
            <Text style={styles.productName}>{props.pName}</Text>
            <Image style={styles.rate} source={require('../assets/rate.png')} />
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{props.price}</Text>
                <Text style={styles.discount}>-39% </Text>
            </View>
        </View>
     );
}

export default Product2;

const styles = StyleSheet.create({
    productWrapper:{
        width: '50%',
        padding: 20,
        display: 'flex',
    },
    productImg: {
        width: 155,
        height: 90,
        margin: 5,
    },
    productName: {
        fontWeight: 400,
        fontSize: 12,
        margin: 5,
    },
    rate: {
        width: 150,
        height: 15,
        margin: 5,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
    },
    price: {
        fontSize: 12,
        fontWeight: 700,
    },
    discount: {
        color: '#969DAA',
        fontSize: 12,
        fontWeight: 400,
    }
})