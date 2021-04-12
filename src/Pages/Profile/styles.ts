import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    
  },
  wrapper: {
    backgroundColor: '#fff',
    paddingTop: 50,
    padding: 15,
    width: 350,
    borderRadius: 10,
    
  },
  header: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userName: {
    color: '#212121',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: '#212121',
    fontSize: 18,
  },
  text: {
    color: '#212121',
    fontSize: 15,
  },
  status: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  alignOneStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    width: '33%',
  },
  textStatus: {
    color: '#212121',
    fontSize: 16,
  },
  containerCard: {
    backgroundColor: '#fff',
    height: 90,
    width: 350,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  titleCard: {
    color: '#212121',
    fontSize: 18,
    width: '100%',
  },
  textCard: {
    color: '#212121',
    fontSize: 15,
  },
});

export default styles;
