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
        alignItems: "center"
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
    listBox: {
        marginTop: hp(3),
        paddingHorizontal: hp(1),
    },
    itemBox: {
        backgroundColor: '#fafafa',
        borderRadius: hp(2),
        paddingHorizontal: hp(3),
        paddingVertical: hp(3),
        marginBottom: hp(2),
    },
    deleteBtn: {
        paddingLeft: hp(2)
    },
    name: {
        fontSize: hp(2),
        fontWeight: '500',
    },
    shadow: {  
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#757575',
        shadowOpacity: '0.5',
        elevation: 5,
      }
})

export default styles