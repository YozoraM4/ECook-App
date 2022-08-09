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
    fullWidth: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    textWhite: {
        color: '#fff'
    },
    textPink: {
        color: '#fd7463'
    },
    shadow: {  
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#757575',
        shadowOpacity: '0.5',
        elevation: 5,
    },
    headAction: {
        paddingVertical: hp(2),
        paddingHorizontal: hp(2)
    },
    headline: {
        fontSize: hp(2.5),
        fontWeight: '500',
        paddingLeft: hp(2),
        paddingBottom: hp(1)
    },
    form: {
        width: '100%',
        paddingHorizontal: hp(5)
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: hp(3),
        paddingVertical: hp(2),
        borderRadius: hp(1.5),
        marginHorizontal: hp(0.5),
        marginVertical: hp(1.5)
    },
    actionBtn: {
        backgroundColor: '#f6846b',
        paddingHorizontal: hp(10),
        paddingVertical: hp(2),
        borderRadius: hp(1.5),
        marginTop: hp(5)
    }
})

export default styles