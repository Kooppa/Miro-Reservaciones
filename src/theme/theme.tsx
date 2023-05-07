import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#ce183b',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: colors.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 10,
    color: colors.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    margin: 15,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100$%',
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
 },
  borderBottom: {
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  borderTop: {
    borderTopColor: 'gray',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  card: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 5,
  },
});
