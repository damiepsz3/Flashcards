import { StyleSheet } from 'react-native';
import { white, gray, blue, green } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputContainer: {
    backgroundColor: white,
    marginBottom: 1,
  },
  submitBton: {
    textAlign: 'center',
    fontSize: 20,
    color: white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: green,
  },
  btnText: {
    fontSize: 30,
    color: blue,
  },
  labelInput: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  }
})
