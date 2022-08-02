import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    componentContainer: {
        width: wp(100),
        height: hp(100),
        paddingVertical: hp(3),
        backgroundColor: '#fff'
    },
    headerBox: {
        paddingHorizontal: hp(3),
    },
    title: {
        fontSize: hp(4),
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#f8f7f7',
        borderRadius: hp(50),
        paddingHorizontal: hp(3),
        marginVertical: hp(2.5)
    },
    input: {
        paddingHorizontal: hp(2),
    },
    subTitle: {
        fontSize: hp(2),
        color: '#757575'
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
        borderRadius: hp(1),
        overflow: "hidden",
    },
    foodLists: {
        width: '100%',
        marginVertical: hp(2),
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
})

export default styles