import { StyleSheet } from 'react-native';

const gridCellStyles = StyleSheet.create({
  gridCell: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default gridCellStyles;

