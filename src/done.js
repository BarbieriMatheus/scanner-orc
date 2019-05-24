import React from 'react'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks'

import { Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'

function Screen() {
  const image = useNavigationParam('image')
    console.log(image);
    
  return (
    <View style={{ flex: 1 }}>
        <Image source={{ uri: `data:image/jpeg;base64,${image}` }} resizeMode="contain" style={{ flex: 2 }} />
    </View>
  )
}

export default Screen
