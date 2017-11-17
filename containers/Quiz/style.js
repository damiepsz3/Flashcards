import { StyleSheet } from 'react-native';
import { white, gray, blue, green, red, purple } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    backgroundColor: white,
    padding: 20,
    width: 300,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cardText:{
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  respBtn: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    color: white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  toggleBtn: {
    fontSize: 20,
    color: blue,
  },
  percn: {
    fontSize: 25,
    color: blue,
  }
})
