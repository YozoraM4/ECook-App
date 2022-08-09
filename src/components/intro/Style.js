import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    componentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
    },
    textPink: {
        color: '#fd7463'
    },
    textWhite: {
        color: '#fff'
    },
    headBox: {
        width: wp(100),
        paddingVertical: hp(5),
        paddingHorizontal: hp(3),
    },
    headline: {
        fontSize: hp(5),
        fontWeight: "900",
    },
    subline: {
        fontSize: hp(2),
        fontWeight: '500',
    },
    nextBtn: {
        backgroundColor: '#fd7463',
        borderRadius: hp(5),
        paddingHorizontal: hp(10),
        paddingVertical: hp(2),
        marginVertical: hp(5)
    }
})

export default styles