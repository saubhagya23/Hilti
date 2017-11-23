import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

export const asyncGet = (key) => {
    console.log('getting async',key);
   return AsyncStorage.getItem(key)
}

export const asyncPost = (key,value) => {
    console.log('setting async');
    AsyncStorage.setItem(key, value);
}