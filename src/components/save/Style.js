import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const styles = StyleSheet.create ({
    container: {
        width: wp(100),
        height: hp(95),
        alignItems: "center",
        justifyContent: 'center'
    },
    componentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    flex: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textWhite: {
        color: '#fff'
    },
    textPink: {
        color: '#fd7463'
    },
    headline: {
        fontSize: hp(2.5),
        fontWeight: '700',
    },
    card: {
        width: wp(46),
        height: hp(40),
        backgroundColor: '#f6846b',
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: hp(1),
        marginHorizontal: hp(1),
        position: "relative",
        borderRadius: hp(2),
        overflow: "hidden"
    },
    foodLists: {
        width: '100%',
        height: '100%',
        marginBottom: hp(2),
    },
    foodName: {
        color: '#fff',
        fontSize: hp(2.5),
        fontWeight: '700',
    },
    duration: {
        color: '#fff',
        fontSize: hp(1.5),
        fontWeight: '400',
        paddingHorizontal: hp(0.5),
    },
    food: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    nameBox: {
        width: '100%',
        position: "absolute",
        bottom: hp(0),
        paddingHorizontal: hp(2),
        paddingVertical: hp(1),
    },
    actionBox: {
        width: '100%',
        position: "absolute",
        top: hp(0),
        left: hp(0),
        paddingHorizontal: hp(1.5),
        paddingVertical: hp(1.5),
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: 10,
    },
    removeBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: hp(5),
        padding: hp(1)
    }
})

export default styles