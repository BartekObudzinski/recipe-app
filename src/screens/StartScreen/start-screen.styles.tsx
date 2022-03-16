import {StyleSheet} from 'react-native';

export const StartScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#58b8ac',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoContainerWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  logoTitle: {
    fontSize: 48,
    fontWeight: '500',
    color: 'white',
    paddingTop: 20,
    fontFamily: 'Graphik',
  },
  logoDescription: {
    fontSize: 24,
    fontWeight: '400',
    color: '#EEEEEE',
  },
  buttonContainerWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 20,
    height: 75,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#049484',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.8,
    color: '#EEEEEE',
    paddingBottom: 10,
  },
});
