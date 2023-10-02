import { StyleSheet } from 'react-native';

const refuelInfostyles = StyleSheet.create({
  noteBlock: {
	marginTop: 10,
  },
  notePanel: {
    borderTopWidth: 0, 
	borderTopColor: 'gray', 
	backgroundColor: '#eee',
  },
  noteTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
  },
  noteTitleText: {
    fontSize: 14,
  },
  noteContainer: {
    flexDirection: 'row',
    // marginTop: 20,
    alignItems: 'center',
  },
  noteTypeIcon: {
    width: 35, 
    height: 35,
    // marginRight: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default refuelInfostyles;
