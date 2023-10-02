import React from 'react';
import { View, Image, Text} from 'react-native';

import refuelInfostyles		from '../styles/refuelInfoStyles.js';
import imageSources			from '../src/utils/ImageSouces.js';
import GridData				from './GridData.js';

const RefuelInfo = ({ data }) => (

	<View style={refuelInfostyles.noteBlock}>

		<View style={refuelInfostyles.noteTitle}>
			<Text style={refuelInfostyles.noteTitleText}>Reabastecimento</Text>
			<Text style={refuelInfostyles.noteTitleText}>{data.date}</Text>
		</View>

		<View style={refuelInfostyles.notePanel} >

			<View style={refuelInfostyles.noteContainer}>
				<Image source={imageSources.fuel} style={refuelInfostyles.noteTypeIcon} />
				<GridData data={ data }/>
			</View>

		</View>

	</View>
);

export default RefuelInfo;
