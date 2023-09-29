import React from 'react';
import { Text, View } from 'react-native';
import gridStyles from '../styles/gridCellStyles.js';

const GridCell = ({label, value}) => (
	<View style={gridStyles.gridCell}>
		<Text style={gridStyles.label}> {label} </Text>
		<Text style={gridStyles.value}> {value} </Text>
	</View>
);

export default GridCell;
