import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fd7463'
    },
    componentContainer: {
        width: wp(100),
        height: hp(100),
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fd7463'
    },
    textWhite: {
        color: '#fff'
    },
    textPink: {
        color: '#fd7463',
    },
    langBox: {
        position: "absolute",
        top: hp(2),
        right: hp(2),
        zIndex: 10
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(248, 247, 247, 0.7)',
        borderRadius: hp(2),
        paddingHorizontal: hp(5),
        paddingVertical: hp(5),
        marginTop: hp(10)
    },
    login: {
        fontSize: hp(5),
        fontWeight: '900',
        color: '#fd7463',
        paddingBottom: hp(3)
    },
    inputBox: {
        width: wp(100),
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: wp(70),
        backgroundColor: '#fff',
        borderRadius: hp(1),
        paddingVertical: hp(0.5),
        paddingHorizontal: hp(3),
        marginVertical: hp(1),
    },
    shadow: {  
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#757575',
        shadowOpacity: hp(0.5),
        elevation: 3,
    },
    loginBtn: {
        backgroundColor: '#fd7463',
        marginTop: hp(3),
        paddingHorizontal: hp(8),
        paddingVertical: hp(1.5),
        borderRadius: hp(1)
    },
    text: {
        fontSize: hp(2),
        fontWeight: '500',
    },
    footerBtn: {
        paddingHorizontal: hp(0.5)
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: hp(2),
    },

})

export default styles