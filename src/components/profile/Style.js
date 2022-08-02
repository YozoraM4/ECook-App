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
        backgroundColor: '#fff'
    },
    componentContainer: {
        width: wp(100),
        height: '100%',
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: hp(3)
    },
    avatar: {
        width: hp(20),
        height: hp(20),
        backgroundColor: '#f15044',
        borderRadius: hp(50),
        resizeMode: "contain"
    }
})

export default styles