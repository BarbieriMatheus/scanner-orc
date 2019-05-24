import React from 'react'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks'

import { Image, View } from 'react-native'
import { Icon } from 'react-native-elements'

function Screen() {
  const image = useNavigationParam('image')
  const { navigate } = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: `data:image/jpeg;base64,${image}` }} resizeMode="contain" style={{ flex: 2 }} />
      <View style={{ position: 'absolute', bottom: 10, right: 80 }}>
        <Icon
          raised
          name='add'
          type='material'
          color='#f50'
          size={30}
          onPress={() => navigate('Done', {image})} />
      </View>
      <View style={{ position: 'absolute', bottom: 10, left: 80 }}>
        <Icon
          raised
          name='delete'
          type='material'
          color='#f50'
          onPress={() => navigate('Crop')} />
      </View>
    </View>
  )
}

export default Screen
