import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";

function ProductDetail({ route }) {

    const {path, name, price} = route.params

    return ( 
        <View style={styles.wrapper}>
            <View style={styles.imgWrapper}>
                <Image style={styles.img} source={path} />
            </View>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.detail}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            <View style={styles.btnWrapper}>
                <Image style={styles.heart} source={require('../assets/heart.png')} />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Add to card</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default ProductDetail;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 10,
    },
    imgWrapper: {
        width: '100%',
        height: 350,
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 320,
        height: 300,
    },
    productName: {
        fontSize: 35,
        fontWeight: 400,
        marginTop: 10,
    },
    price: {
        fontSize: 25,
        fontWeight: 400,
        marginTop: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 400,
        marginTop: 20,
        marginBottom: 20,
    },
    detail: {
        fontSize: 22,
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.57)',
        marginBottom: 20,
    },
    btnWrapper: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heart: {
        width: 35,
        height: 35,
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor: '#E94141',
         borderRadius: 30,
         width: 270,
         height: 54,    
    },
    btnTxt: {
        color: '#fff',
    }
})
