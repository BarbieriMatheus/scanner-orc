import React, { useState, useEffect } from 'react'
import { View, Image, Text, Platform, PermissionsAndroid } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import DocumentScanner from 'react-native-document-scanner';

function Scanner() {
  const [state, setState] = useState({ image: null, detectionCount: 5 })
  const { navigate } = useNavigation()

  useEffect(() => {
    if (Platform.OS === 'android') permissions();
  }, [])

  permissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA
      ]);

      if (
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
        granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        // <DocumentScanner ref={(ref) => this.scanner = ref} /> 
        // this.scanner.capture();
      } else {
        // call Permission Error
        console.log('error1');
      }
    } catch (err) {
      // call Permission Error
      console.log(err);
    }
  }


  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ backgroundColor: 'red', width: 100 }} >
          <Text>asdasdasdasdaasasda</Text>
        </View> */}
      <DocumentScanner
        style={{ flex: 1 }}
        useBase64
        saveInAppDocument={false}
        onPictureTaken={data => {
          setState({ ...state, detectionCount: 25, image: data.croppedImage, initialImage: data.initialImage, rectangleCoordinates: data.rectangleCoordinates })
          console.log('registrou imagem')
          navigate('Image', { image: data.croppedImage })
        }}
        overlayColor="rgba(255,130,0, 0.7)"
        enableTorch={false}
        brightness={0.3}
        saturation={1}
        contrast={0}
        quality={0.5}
        onRectangleDetect={({ stableCounter }) => setState({ stableCounter, lastDetectionType: 0})}
        detectionCountBeforeCapture={state.detectionCount}
        detectionRefreshRateInMS={100}
        noGrayScale={true}
        captureMultiple={false}
      />
    </View>
  )
}

export default Scanner