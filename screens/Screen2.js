import { Image, StyleSheet, TextInput, View } from "react-native";
import Product2 from "../components/Product2";

function Screen2() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.navWrapper}>
                <Image style={styles.backImg} source={require('../assets/back.png')} />
                <TextInput style={styles.searchInput} placeholder='Dây cáp usb' />
                <Image style={styles.searchImg} source={require('../assets/search.png')} />
                <Image style={styles.cartImg} source={require('../assets/cart.png')} />
                <Image style={styles.redDot} source={require('../assets/Ellipse4.png')} />
                <Image style={styles.threeDots} source={require('../assets/threeDots.png')} />
             </View>
             <View style={styles.productContainer}>
                <View style={styles.productWrapper}>
                    <Product2 pathImg={require('../assets/prd1.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                    <Product2 pathImg={require('../assets/prd2.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                </View>
                <View style={styles.productWrapper}>
                    <Product2 pathImg={require('../assets/prd3.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                    <Product2 pathImg={require('../assets/prd4.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                </View>
                <View style={styles.productWrapper}>
                    <Product2 pathImg={require('../assets/prd5.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                    <Product2 pathImg={require('../assets/prd6.png')} pName='Cáp chuyển từ Cổng USB sang PS2...' price='69.900 đ' />
                </View>
             </View>
             <Image style={styles.navBottom} source={require('../assets/navBottom.png')} />
        </View>
     );
}

export default Screen2;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: '#e5e5e5',
    },
    navWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'fixed',
        top: 0,
        zIndex: 1,
        width: '100%',
    },
    backImg: {
        width: 24,
        height: 24,
    },
    searchInput: {
        width: 192,
        height: 30,
        position: 'relative',
        backgroundColor: '#fff',
        paddingLeft: 40,
    },
    searchImg: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 80,
    },
    cartImg: {
        width: 24,
        height: 24,
        position: 'relative',
    },
    redDot: {
        width: 17,
        height: 17,
        position: 'absolute',
        right: 65,
        top: 2,
    },
    threeDots: {
        width: 18,
        height: 5,
    },
    productWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    productContainer: {
        marginTop: 42, 
        marginBottom: 42,
    }, 
    navBottom: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 42,
    }
})