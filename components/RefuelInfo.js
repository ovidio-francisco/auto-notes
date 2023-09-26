import React from 'react';
import { View, Image, Text} from 'react-native';

import homeStyles   from '../styles/homeStyles.js';

import GridData     from './GridData.js';

{/* Arrumar isso!!! */}
const imageSources = {
  user: require('../assets/user.png'),
  fuel: require('../assets/fuel.png'),
  oil:  require('../assets/oil.png'),
  tire: require('../assets/tire.png'),
};




const RefuelInfo = ({ data }) => (
	<View style={homeStyles.panel}>

		<View style={homeStyles.iconContainer}>
			<Image source={imageSources.fuel} style={homeStyles.panelIcon} />
		</View>

		<View style={homeStyles.infoContainer}>
			<View style={homeStyles.infoRow}>
				<Text style={homeStyles.infoText}>Reabastecimento</Text>
				<Text style={homeStyles.infoText}>{data.date}</Text>
			</View>

			<View style={homeStyles.grid}>
				<GridData data={ data }/>
			</View>
		</View>

	</View>
);

export default RefuelInfo;
