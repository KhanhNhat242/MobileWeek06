import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Product1 = props => {
    return ( 
        <View style={styles.productWrapper}>
            <Image style={styles.productImg} source={props.pathImg} />
            <View style={styles.productDetail}>
                <Text style={styles.productName}>{props.prdName}</Text>
                <View style={styles.shopWrapper}>
                    <Text style={styles.shopTitle}>Shop:</Text>
                    <Text style={styles.shopName}>{props.sName}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.chatBtn}>
                <Text style={styles.chatTxt}>Chat</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Product1;

const styles = StyleSheet.create({
    productWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: '#fff',
        borderColor: '#c4c4c4',
        borderWidth: 1 ,
    },
    productImg: {
        width: 74,
        height: 74,
    },
    productDetail: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
    },
    productName: {

    },
    shopWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    shopTitle: {
        color: '#7D5B5B',
    },
    shopName: {
        marginLeft: 10,
    },
    chatBtn: {
        width: 88,
        height: 38,
        backgroundColor: '#F31111',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatTxt: {
        color: '#fff'
    }
})