import { StyleSheet } from 'react-native';
import { white, blue, gray, green, purple } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: blue,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    color: gray,
    fontSize: 40,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 24,
  }
})
