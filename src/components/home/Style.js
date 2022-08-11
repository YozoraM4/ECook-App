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
        alignItems: "center"
    },
    logo: {
        width: wp(10),
        position: "absolute",
        right: hp(5),
    },
    header: {
        paddingTop: hp(2),
    },
    componentContainer: {
        flex: 1,
        width: wp(100),
        height: hp(100),
        backgroundColor: '#fff'
    },
    headerBox: {
        paddingHorizontal: hp(3),
        borderBottomLeftRadius: hp(5),
        borderBottomRightRadius: hp(5),
        backgroundColor: '#f6846b'
    },
    title: {
        fontFamily: 'BreeSerif-Regular',
        fontWeight: '500',
        fontSize: hp(3.5),
        color: '#fff'
    },
    slogan: {
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2.5),
        fontWeight: '300',
        color: '#fff'
    },
    avatarContainer: {
        width: hp(10),
        height: hp(10),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: hp(6)
    },
    avatar: {
        width: hp(9.2),
        height: hp(9.2),
        borderWidth: hp(0.3),
        borderColor: '#fff',
        borderRadius: hp(50),
        resizeMode: "contain",
        position: "absolute",
        top: hp(0.4),
        left: hp(0.1),
        zIndex: -1
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#f8f7f7',
        borderRadius: hp(50),
        paddingLeft: hp(3),
        paddingRight: hp(7),
        marginTop: hp(2),
        marginBottom: hp(5)
    },
    input: {
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2),
        width: '100%',
        paddingHorizontal: hp(2),
    },
    subTitle: {
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2),
        color: '#757575'
    },
    card: {
        width: wp(47.5),
        height: hp(35),
        backgroundColor: '#f6846b',
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: hp(1),
        marginHorizontal: hp(0.7),
        position: "relative",
        borderRadius: hp(1),
        overflow: "hidden",
    },
    foodLists: {
        width: '100%',
        height: '100%',
        marginBottom: hp(1),
    },
    foodName: {
        color: '#fff',
        fontFamily: 'BreeSerif-Regular',
        fontSize: hp(2.5),
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
        position: "absolute",
        bottom: hp(0),
        paddingHorizontal: hp(2),
        paddingVertical: hp(1),
    },
    addBtn: {
        position: "absolute",
        backgroundColor: '#fff',
        paddingHorizontal: hp(2),
        paddingVertical: hp(1),
        borderRadius: hp(5),
        bottom: hp(3),
        right: hp(3),
        transform: [{ rotate: "45deg" }]
    },
    shadow: {  
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#f6846b',
        shadowOpacity: hp(0.5),
        elevation: 3,
      }
})

export default styles