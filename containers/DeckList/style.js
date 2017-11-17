import { white, blue, gray } from '../../utils/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginBottom: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
  title: {
    color: blue,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questions: {
    color: gray,
    fontSize: 20,
  },
})
