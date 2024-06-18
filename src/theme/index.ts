import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
  COLORS: {
    WHITE: '#FFF',

    CAPTION_500: '#71717A',
    CAPTION_400: '#A1A1AA',
    CAPTION_300: '#D4D4D8',
    CAPTION_200: '#e2e2e5',

    SHAPE: '#2A2634',
    BACKGROUND_LOGIN: '#1B1B1F',

    TITLE: '#363F5F',
    TEXT: '#969CB2',
    TEXT_DARK: '#000',

    BUTTON_QUANTITY: '#808287',

    OPEN: '#528F33',
    OPEN_LIGHT: 'rgba(82, 143, 51, 0.5)',

    CONFIRM: '#1BC5BD',
    DISABLE_CONFIRM: '#1bc5bd78',

    ATTENTION: '#E83F5B',
    ATTENTION_LIGHT: 'rgba(232,63,91,0.5)',

    PRIMARY: '#0ACF83',

    OVERLEY: 'rgba(0,0,0,0.6)',
  },

  SIZES: {
    width,
    height,
  },

  // FONTS: {
  //   REGULAR:'Poppins-Regular',
  //   BOLD:'Poppins-Bold',
  //   SEMI_BOLD: 'Poppins-SemiBold',
  //   LIGHT: 'Poppins-Light',
  //   EXTRA_LIGHT: 'Poppins-ExtraLight',
  //   MEDIUM: 'Poppins-Medium'
  // },
};
