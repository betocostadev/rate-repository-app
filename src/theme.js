import { Platform, Dimensions } from 'react-native';

// const defaultFont = () => {
//   return Platform.OS === 'android' ? 'Roboto' : Platform.OS === 'ios' ? 'Arial' : 'System';
// };

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhiteSmoke: 'whitesmoke',
    textWhite: 'white',
    textDanger: 'red',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  textInput: {
    borderColor: '#e1e4e8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    color: '#24292e',
  },
  textInputError: {
    borderColor: '#d73a4a',
    borderWidth: 1,
  },
  flex: {
    flexRow: {
      flexDirection: 'row'
    }
  },
  buttons: {
    largeButton: {
      flex: 1
    }
  },
  spinLoader: {
    container: {
      width: Dimensions.get('window').width,
      backgroundColor: '#fff',
      height: Dimensions.get('window').height,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loader: {
      borderStyle: 'solid',
      borderWidth: 16,
      borderColor: '#f3f3f3',
      borderRadius: 100,
      borderTopWidth: 16,
      borderTopColor: '#3498db',
      width: 120,
      height: 120,
      transform: [{ rotate: '45deg'}]
    }
  }
};

export default theme;
