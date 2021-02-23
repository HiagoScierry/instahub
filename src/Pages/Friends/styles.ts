import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  areaCard: {
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerCard: {
    width: 350,
    height: 50,
    paddingLeft: 20,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  smallImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
  },
  biggestImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default styles;
