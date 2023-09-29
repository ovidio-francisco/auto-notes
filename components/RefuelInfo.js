import React from 'react';
import { View, Image, Text} from 'react-native';

import refuelInfostyles		from '../styles/refuelInfoStyles.js';
import imageSources from '../src/utils/ImageSouces.js';
import GridData     from './GridData.js';


const RefuelInfo = ({ data }) => (
	<View style={refuelInfostyles.panel}>

		<View style={refuelInfostyles.iconContainer}>
			<Image source={imageSources.fuel} style={refuelInfostyles.panelIcon} />
		</View>

		<View style={refuelInfostyles.infoContainer}>
			<View style={refuelInfostyles.infoRow}>
				<Text style={refuelInfostyles.infoText}>Reabastecimento</Text>
				<Text style={refuelInfostyles.infoText}>{data.date}</Text>
			</View>

			<View style={refuelInfostyles.grid}>
				<GridData data={ data }/>
			</View>
		</View>

	</View>
);

export default RefuelInfo;
