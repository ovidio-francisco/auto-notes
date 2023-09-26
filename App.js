import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';

import homeStyles   from './styles/homeStyles.js';
import RefuelInfo       from './components/RefuelInfo.js';
import Button       from './components/Button.js';

const imageSources = {
  user: require('./assets/user.png'),
  fuel: require('./assets/fuel.png'),
  oil:  require('./assets/oil.png'),
  tire: require('./assets/tire.png'),
};


const rowData3 = {
	date: '11/12/2023',
	des: 128.5,
	desUnity: 'Km',
	fuelName: 'Gasolina',
	fuelUnity: 'Litros',
	fuelVol: 8.3,
	perf: 29.4,
	odo: '86357',
	price: 45.86,
	local: 'Posto Shell'
};



export default function App() {

	return (
		<View style={homeStyles.container}>

			<View style={homeStyles.topRow}>
				<Text style={homeStyles.title}>Auto Notes 12</Text>
				<Image source={imageSources.user} style={homeStyles.icon} />
			</View>

			<View style={homeStyles.buttonBar}>
				<Button icon={imageSources.fuel} text={'Combustível'}/>
				<Button icon={imageSources.oil}  text={'Óleo'}/>
				<Button icon={imageSources.tire} text={'Pneus'}/>
			</View>

			<View style={homeStyles.contentBelow}>
				<Text>This is some content below the title and icon.1</Text>
			</View>

			<RefuelInfo data={rowData3}/>

			<StatusBar style="auto" />
		</View>
	);
}

