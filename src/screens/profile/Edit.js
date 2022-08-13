import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
// Style
import styles from '@components/profile/Style'

// Icons 
import Frame from '@assets/icons/frame';
import BackIcon from '@assets/icons/back';
import BookMarkIcon from '@assets/icons/bookmark';
import HeartIcon from '@assets/icons/heart';

// Components
import { AppContext } from '@context/context';
import { AppStorage } from '../../utils';
import * as actionProfile from '../../store/actions/profile';
import { UseLocal } from '../../hook';

const Edit = ({navigation}) => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();

    const saveRecipes = useSelector(state=> state.SavedList.savedRecipes)
    const likedRecipes = useSelector(state => state.LikedList.likedRecipe)
    const {userInfo} = useContext(AppContext);
    const local = UseLocal();
    const dispatch = useDispatch();

    const openFile = async() => {
        const result = await launchImageLibrary();
        setImage(result.assets[0].uri);
    }

    const UpdateHandler = () => {
        const updateData = {
            name: name,
            password: password,
            image: image,
        }
        AppStorage.setItem('@user.data', JSON.stringify(updateData));
        dispatch(actionProfile.update(updateData));
        navigation.goBack();
    } 
  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        <View>
            <View style={[styles.actionBox, styles.flexRow, {justifyContent: 'flex-start', alignItems: 'center'}]}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={[{paddingHorizontal: hp(3), paddingTop: hp(1)}]} activeOpacity={0.8}>
                    <BackIcon
                        width={hp(2.5)}
                        height={hp(2.5)}
                        colors="#fff"
                    />
                </TouchableOpacity>
                <Text style={[styles.textWhite, {fontFamily: 'BreeSerif-Regular', fontSize: hp(2.5), paddingTop: hp(0.5)}]}>{local.edit}</Text>
            </View>


            <TouchableOpacity onPress={openFile} style={[styles.avatarContainer, {marginTop: hp(0), zIndex: 5}]}>
                <Frame
                    width={wp(100)}
                    height={hp(22)}
                    colors='#d5d5d5'
                />
                <Image style={styles.avatar} source={{uri: image}} />
            </TouchableOpacity>
            <View style={[styles.userInfo, {marginTop: hp(-15), paddingTop: hp(15)}]}>
                <View style={{marginBottom: hp(3)}}>
                    <Text style={[styles.userName, styles.textPink]}>{name}</Text>
                </View>
                
                <View style={[styles.rowAround, {marginBottom: hp(3)}]}>
                    <View>
                    <Text style={{fontFamily: 'BreeSerif-Regular'}}>{local.LRecipes}</Text>
                    <View style={styles.flexRow}>
                        <HeartIcon
                        width={wp(5)}
                        height={hp(5)}
                        colors="#fd7463"
                        fill="#fd7463"
                        />
                        <Text style={[styles.textPink, {fontFamily: 'BreeSerif-Regular', paddingHorizontal:hp(1)}]}>{likedRecipes.length}</Text>
                    </View>
                    </View>
                    <View>
                    <Text style={{fontFamily: 'BreeSerif-Regular'}}>{local.SRecipes}</Text>
                    <View style={styles.flexRow}>
                        <BookMarkIcon
                        width={wp(5)}
                        height={hp(5)}
                        colors="#fd7463"
                        fill="#fd7463"
                        />
                        <Text style={[styles.textPink, {fontFamily: 'BreeSerif-Regular', paddingHorizontal:hp(1)}]}>{saveRecipes.length}</Text>
                    </View>
                    </View>
                </View>
                <View>
                    <View style={[styles.rowAround]}>
                        <TextInput 
                            editable
                            value={name}
                            onChangeText={value=> setName(value)}
                            placeholder={local.updName}
                            style={[styles.textPink, styles.input]}
                        />
                    </View>
                    <View style={styles.rowAround}>
                        <TextInput 
                            editable
                            value={password}
                            onChangeText={value=> setPassword(value)}
                            placeholder={local.updPwd}
                            style={[styles.textPink, styles.input]}
                        />
                    </View>
                </View>
                <View>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={UpdateHandler} style={styles.confirmBtn}>
                    <Text style={[styles.textWhite, {fontFamily: 'BreeSerif-Regular', fontSize: hp(2)}]}>{local.confirm}</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </View>
  )
}

export default Edit