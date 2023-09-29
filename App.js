import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import RefuelInfo   from './components/RefuelInfo.js';
import Button       from './components/Button.js';
import homeStyles   from './styles/homeStyles.js';
import imageSources from './src/utils/ImageSouces.js';
import rowData3		from './testData/sampleData.js';

export default function App() {

	return (
		<View style={homeStyles.container}>

			<View style={homeStyles.topRow}>
				<Text style={homeStyles.title}>Auto Notes 2</Text>
				<Image source={imageSources.user} style={homeStyles.userIcon} />
			</View>

			<View style={homeStyles.buttonBar}>
				<Button icon={imageSources.fuel} text={'Combustível'}/>
				<Button icon={imageSources.oil}  text={'Óleo'}/>
				<Button icon={imageSources.tire} text={'Pneus'}/>
			</View>

			<RefuelInfo data={rowData3}/>

			<StatusBar style="auto" />
		</View>
	);
}

