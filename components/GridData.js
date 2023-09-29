import React from 'react';
import { View } from 'react-native';

import GridCell     from './GridCell.js';
import gridCellStyles   from '../styles/gridDataStyles.js';


const GridData = ({ data }) => (
	<View>
		<View style={gridCellStyles.gridData}>
			<GridCell label='Des'                                   value={data.des}/> 
			<GridCell label={data.fuelName}                         value={data.fuelVol}/> 
			<GridCell label={`${data.desUnity}/${data.fuelUnity}`}  value={data.perf}/> 
		</View>
		<View style={gridCellStyles.gridData}>
			<GridCell label='Odo'                                   value={data.odo}/> 
			<GridCell label='Preço'                                 value={`R$ ${data.price}`}/> 
			<GridCell label='Local'                                 value={data.local}/> 
		</View>
	</View>
);

export default GridData;
