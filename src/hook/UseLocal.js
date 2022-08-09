import React, {useContext} from 'react';

// Components
import { AppContext } from '@context/context'
import en from '../helper/en';
import mm from '../helper/mm'

export const UseLocal = () => {
  const {lang} = useContext(AppContext);
  if (lang === 'EN') {
    return en;
  } else {
    return mm;
  }
};