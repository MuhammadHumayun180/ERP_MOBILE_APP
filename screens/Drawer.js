import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from './FeedScreen'; // Import your feed screen component
import ArticleScreen from './ArticleScreen'; // Import your article screen component
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
  
      <Drawer.Navigator initialRouteName="LoginPage" screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="Article" component={ArticleScreen} />
      </Drawer.Navigator>

  );
};

export default DrawerNavigator;