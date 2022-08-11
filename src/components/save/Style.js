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
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2.5),
        fontWeight: '500',
    },
    card: {
        width: wp(48),
        height: hp(30),
        backgroundColor: '#f6846b',
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: hp(1),
        marginHorizontal: hp(0.5),
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
        fontFamily: 'BreeSerif-Regular',
        color: '#fff',
        fontSize: hp(2),
        fontWeight: '500',
    },
    duration: {
        fontFamily: 'BreeSerif-Regular',
        color: '#fff',
        fontSize: hp(2),
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
        backgroundColor: 'rgba(0,0,0, 0.3)',
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
        // backgroundColor: 'rgba(0,0,0, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: hp(1),
        padding: hp(1)
    }
})

export default styles