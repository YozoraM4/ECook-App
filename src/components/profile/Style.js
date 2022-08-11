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
        backgroundColor: '#fd7463'
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    rowAround: {
        width: wp(100),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    rowBetween: {
        width: wp(100),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textPink: {
        color: '#fd7463'
    },
    textWhite: {
        color: '#fff'
    },
    componentContainer: {
        width: wp(100),
        height: '100%',
    },
    actionBox: {
        height: hp(3.5),
        marginTop: hp(1.5),
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: 10,
    },
    actionBtn: {
        borderRadius: hp(50),
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: hp(1),
        paddingVertical: hp(1),
        marginHorizontal: hp(1.5),
        zIndex: 5
    },
    avatarContainer: {
        width: '100%',
        height: hp(30),
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: hp(20),
        height: hp(20),
        backgroundColor: '#fd7463',
        borderWidth: hp(0.3),
        borderColor: '#d5d5d5',
        borderRadius: hp(50),
        resizeMode: "cover",
        position: "absolute",
        top: hp(5),
        zIndex: -1
    },
    userInfo: {
        width: wp(100),
        height: '100%',
        marginTop: hp(-18),
        paddingTop: hp(18),
        alignItems: "center",
        backgroundColor: '#fff',
        borderTopLeftRadius: hp(5),
        borderTopRightRadius: hp(5),
    },
    options: {
        fontFamily: 'BreeSerif-Regular',
        paddingHorizontal: hp(3),
        paddingVertical: hp(3),
        fontSize: hp(2),
        fontWeight: '500',
    },
    actionText: {
        paddingHorizontal: hp(1),
        color: '#757575'
    },
    userName: {
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(3),
        fontWeight: '500',
        paddingBottom: hp(3),
    },
    sectionBox: {
        paddingHorizontal: hp(5),
    },
    section: {
        alignItems: "center",
        padding: hp(2.5),
        marginBottom: hp(1),
        
    },
    flip: {
        transform: [{ rotate: "180deg" }]
    },
    shadow: {  
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#757575',
        shadowOpacity: hp(0.5),
        elevation: 1,
    },
    confirmBtn: {
        backgroundColor: '#f6846b',
        paddingHorizontal: hp(8),
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        marginTop: hp(10)
    },
    input: {
        fontFamily: 'BreeSerif-Regular', 
        fontSize: hp(2.5), 
        width: wp(80)
    }
})

export default styles