import {createStackNavigator, createAppContainer} from 'react-navigation';

import Crop from './index'
import Image from './image'
import Done from './done'

const MainNavigator = createStackNavigator({
  Crop: {screen: Crop},
  Image: {screen: Image},
  Done: {screen: Done}
});

const App = createAppContainer(MainNavigator);

export default App;