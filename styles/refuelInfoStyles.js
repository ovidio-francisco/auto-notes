
import { StyleSheet } from 'react-native';

const refuelInfostyles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 3,
    marginLeft: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
  },
  panelIcon: {
    width: 35, 
    height: 35,
    marginRight: 1,
  },
  grid: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default refuelInfostyles;

