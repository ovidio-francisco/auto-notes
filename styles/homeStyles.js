import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: 10,
	},
	topRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	userIcon: {
		width: 30,
		height: 30,
	},

	buttonBar: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
});


export default styles;
