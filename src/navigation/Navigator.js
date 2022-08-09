import React,{ useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

// Component
import { AppContext } from '../context/context'
import { AppStorage } from '../utils'
import store from '../store'

// Stacks
import TabNavigator from './tabNvigator/TabNavigator'
import AuthStack from './stack/AuthStack'
import IntroStack from './stack/IntroStack'

const Navigator = () => {
  const [intro, setIntro] = useState(true)
  const [auth, setAuth] = useState(false);
  const [lang, setLang] = useState('EN');
  const [userInfo, setUserInfo] = useState();

  const context = {
    auth,
    lang,
    userInfo,

    getIntro: value => {
      setIntro(value);
    },
    getAuth: value => {
      setAuth(value);
    },
    getLang: value => {
      setLang(value);
    },
    getUserInfo: value => {
      setUserInfo(value);
    },
  }

  useEffect(()=> {
    getData();
    SplashScreen.hide();
  },[])

  const getData = () => {
    try {
      const intostate = AppStorage.getItem('@intro');
      const language = AppStorage.getItem('@user.language');
      const token = AppStorage.getItem('@user.token');
      const userData = AppStorage.getItem('@user.data');

      if (intostate) {
        setIntro(false)
      } else {
        setIntro(true)
      }

      setLang(language);
      
      if (token) {
        setUserInfo(JSON.parse(userData))
        setAuth(true);
      } else {
        setAuth(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (intro) {
    return (
      <Provider store={store}>
        <AppContext.Provider value={context}>
          <IntroStack />
        </AppContext.Provider>
      </Provider>
    )
  } else if (auth) {
    return (
      <Provider store={store}>
        <AppContext.Provider value={context}>
          <TabNavigator />
        </AppContext.Provider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <AppContext.Provider value={context}>
          <AuthStack />
        </AppContext.Provider>
      </Provider>
    );
  }
}

export default Navigator