import { StyleSheet } from 'react-native';
import { white, defautlGray, blue, green } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: white,
  },
  label: {
    fontSize: 40,
    padding: 30,
    textAlign: 'center',
  },
  titleInput: {
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  submitBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: green,
  }
})
