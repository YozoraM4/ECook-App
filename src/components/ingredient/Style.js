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
})

export default styles