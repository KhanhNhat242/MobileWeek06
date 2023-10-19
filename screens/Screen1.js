import { Image, StyleSheet, Text, View } from "react-native";
import Product1 from "../components/Product1";

function Screen1() {
    return ( 
        <View style={styles.wrapper}>
             <View style={styles.navWrapper}>
                <Image style={styles.backImg} source={require('../assets/back.png')} />
                <Text style={styles.navTxt}>Chat</Text>
                <Image style={styles.cartImg} source={require('../assets/cart.png')} />
             </View>
             <Text style={styles.helpTxt}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
             <View style={styles.productWrapper}>
                <Product1 pathImg={require('../assets/ca_nau_lau.png')} prdName='Ca nấu lẩu, nấu mì mini...' sName='Devang' />
                <Product1 pathImg={require('../assets/ga_bo_toi.png')} prdName='1KG KHÔ GÀ BƠ TỎI...' sName='LTD Food' />
                <Product1 pathImg={require('../assets/xa_can_cau.png')} prdName='Xe cần cẩu đa năng' sName='Thế giới đồ chơi' />
                <Product1 pathImg={require('../assets/do_choi_dang_mo_hinh.png')} prdName='Đồ chơi dạng mô hình' sName='Thế giới đồ chơi' />
                <Product1 pathImg={require('../assets/lanh_dao_gian_don.png')} prdName='Lãnh đạo giản đơn' sName='Minh Long Book' />
                <Product1 pathImg={require('../assets/hieu_long_con_tre.png')} prdName='Hiểu lòng con trẻ' sName='Minh Long Book' />
             </View>
             <Image style={styles.navBottom} source={require('../assets/navBottom.png')} />
        </View>
     );
}

export default Screen1;

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
    },
    backImg: {
        width: 24,
        height: 24,
    },
    navTxt: {
        color: '#fff'
    },
    cartImg: {
        width: 24,
        height: 24
    },
    helpTxt: {
        padding: 20,
    },
    style: {
        display: 'flex',
    },
    navBottom: {
        width: '100%',
        height: 50,
        position: 'fixed',
        bottom: 0,
    },
})