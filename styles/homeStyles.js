import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: 10,
	},
	topRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	contentBelow: {
		marginTop: 20, 
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	icon: {
		width: 30,
		height: 30,
	},

  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
	marginHorizontal: 10,
  },
  buttonIcon: {
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
  },

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
    marginLeft: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
  },
  grid: {
    borderWidth: 1,
    borderColor: 'black',
  },
  gridData: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
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
  },
  panelIcon: {
    width: 60, // Adjust size as needed
    height: 60, // Adjust size as needed
    marginRight: 10,
  },

});


export default styles;
