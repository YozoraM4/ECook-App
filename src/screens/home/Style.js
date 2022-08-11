import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const styles = StyleSheet.create ({
    container: {
        width: wp(100),
        height: hp(100),
        alignItems: "center",
        backgroundColor: '#f6846b'
    },
    actionContainer: {
        top: hp(1),
    },  
    actionBar: {
        width: wp(100),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: hp(1)
    },
    actionBtn: {
        borderRadius: hp(50),
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: hp(1),
        paddingVertical: hp(1),
        marginHorizontal: hp(1.5),
        zIndex: 5
    },
    image: {
        width: wp(100),
        height: hp(50),
        position: "absolute",
    },
    scrollView: {
        flex: 1,
        marginTop: hp(10),
        borderTopLeftRadius: hp(5),
        borderTopRightRadius: hp(5),
        zIndex: 5,
    },
    description: {
        width: wp(100),
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: hp(5),
        borderTopRightRadius: hp(5),
        marginTop: hp(25),
        overflow: "hidden",
        padding: hp(3),
        zIndex: 4,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headTitle: {
        width: wp(73),
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(3),
        fontWeight: '500',
    },
    subTitle: {
        width: wp(73),
        fontFamily: 'BreeSerif-Regular',
        fontWeight: '500'
    },
    flexRow: {
        flexDirection: "row",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ingredientsBox: {
        paddingBottom: hp(2)
    },
    textPink: {
        color: '#f6846b'
    },
    textIngredients: {
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2),
        fontWeight: '500',
    },
    itemBox: {
        paddingVertical: hp(1),
    },
    instruction: {
        paddingVertical: hp(0.5),
        textTransform: "capitalize",
    }
})

export default styles