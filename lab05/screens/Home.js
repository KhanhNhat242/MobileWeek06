import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View, Text } from 'react-native'

function Home({ navigation }) {
    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>A premium online store for <br /> sporter and their stylish choice</Text>
            <View style={styles.imgWrapper}>
                <Image style={styles.bikeImg} source={require('../assets/bike1.png')} />
            </View>
            <Text style={styles.shopName}>POWER BIKE <br /> SHOP</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Product')}>
                <Text style={styles.btnTxt}>Get Started</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Home;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center',
    },
    imgWrapper: {
        width: 360,
        height: 390,
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10%',
        marginTop: 10,
        marginBottom: 20,
    },
    bikeImg: {
        width: 290,
        height: 270,
    },
    shopName: {
        fontWeight: 700,
        fontSize: 26,
        textAlign: 'center',
    },
    btn: {
        width: 340,
        height: 60,
        backgroundColor: '#e94141',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10,
    },
    btnTxt: {
        color: '#fff'
    }
})