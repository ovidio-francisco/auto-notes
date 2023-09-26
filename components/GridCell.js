import React from 'react';
import { Text, View } from 'react-native';
import homeStyles from '../styles/homeStyles.js';

const GridCell = ({label, value}) => (
	<View style={homeStyles.gridCell}>
		<Text style={homeStyles.label}> {label} </Text>
		<Text style={homeStyles.value}> {value} </Text>
	</View>
);

export default GridCell;
