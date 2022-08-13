import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const styles = StyleSheet.create ({
    container: {
        width: wp(100),
        height: '100%',
        position: "absolute",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 10
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
    modalBox: {
        backgroundColor: '#fff',
        paddingVertical: hp(3),
        paddingHorizontal: hp(5),
        borderRadius: hp(1)
    },
    header: {
        fontFamily: 'BreeSerif-Regular',
        paddingBottom: hp(3),
        fontSize: hp(3),
        fontWeight: '500',
    },
    item: {
        marginVertical: hp(1),
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2),
        fontWeight: '400',
        marginVertical: hp(1),
    },
    input: {
        fontFamily: 'BreeSerif-Regular',
        paddingHorizontal: hp(1.5),
        backgroundColor: '#f8f7f7',
        borderRadius: hp(1),
        marginBottom: hp(1.5)
    },
    inputBox: {
        paddingVertical: hp(2),
        alignItems: "center",
        justifyContent: 'center'
    },
    actionBtn: {
        width: '100%',
        alignItems: "center",
        paddingHorizontal: hp(5),
        paddingVertical: hp(1.5),
        marginLeft: hp(3),
        borderRadius: hp(1)
    },
    shadow: {  
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#757575',
        shadowOpacity: hp(0.5),
        elevation: 5,
      }
})

export default styles