import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';


const imageSources = {
  user: require('./assets/user.png'),
  fuel: require('./assets/fuel.png'),
  oil:  require('./assets/oil.png'),
  tire: require('./assets/tire.png'),
};

const Button = ({icon, text}) => (
	<TouchableOpacity style={styles.button}>
		<Image source={icon} style={styles.buttonIcon }/>
		<Text style={styles.buttonText}>{text}</Text>
	</TouchableOpacity>
);

const GridCell = ({label, value}) => (
	<View style={styles.gridCell}>
		<Text style={styles.label}> {label} </Text>
		<Text style={styles.value}> {value} </Text>
	</View>
);

const GridRow = ({ data }) => (
	<View>
		<View style={styles.gridRow}>
			<GridCell label='Des'                                   value={data.des}/> 
			<GridCell label={data.fuelName}                         value={data.fuelVol}/> 
			<GridCell label={`${data.desUnity}/${data.fuelUnity}`}  value={data.perf}/> 

		</View>
		<View style={styles.gridRow}>
			<GridCell label='Odo'                                   value={data.odo}/> 
			<GridCell label='Preço'                                 value={`R$ ${data.price}`}/> 
			<GridCell label='Local'                                 value={data.local}/> 
		</View>
	</View>
);

const RefuelInfo = ({ data }) => (
	<View style={styles.panel}>

		<View style={styles.iconContainer}>
			<Image source={imageSources.fuel} style={styles.panelIcon} />
		</View>

		<View style={styles.infoContainer}>
			<View style={styles.infoRow}>
				<Text style={styles.infoText}>Reabastecimento</Text>
				<Text style={styles.infoText}>{data.date}</Text>
			</View>

			<View style={styles.grid}>
				<GridRow data={ data }/>
			</View>
		</View>

	</View>
);

export default function App() {
	const rowData2 = {
		des: 128.5,
		desUnity: 'Km',
		fuelName: 'Gasolina',
		fuelUnity: 'Litros',
		fuelVol: 8.3,
		perf: 29.4
	};
	const rowData3 = {
		date: '10/10/2023',
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

	return (
		<View style={styles.container}>

			<View style={styles.topRow}>
				<Text style={styles.title}>Auto Notes 1</Text>
				<Image source={imageSources.user} style={styles.icon} />
			</View>

			<View style={styles.buttonBar}>
				<Button icon={imageSources.fuel} text={'Combustível'}/>
				<Button icon={imageSources.oil}  text={'Óleo'}/>
				<Button icon={imageSources.tire} text={'Pneus'}/>
			</View>

			<View style={styles.contentBelow}>
				<Text>This is some content below the title and icon.1</Text>
			</View>

			<View style={styles.panel}>
				<View style={styles.iconContainer}>
					<Image source={imageSources.fuel} style={styles.panelIcon} />
				</View>

			{/*
				<View style={styles.infoContainer}>
					<View style={styles.infoRow}>
						<Text style={styles.infoText}>Reabastecimento</Text>
						<Text style={styles.infoText}>09/09/2023</Text>
					</View>


					<View style={styles.grid}>
						<GridRow data={{ des: 127.3, desUnity: 'Km', fuelName: 'Gas', fuelUnity: 'litros', fuelVol: 20, perf: 18.6, }} />
						<GridRow data={rowData2 }/>
					</View>
				</View>

			*/}
			</View>

			<RefuelInfo data={rowData3}/>

			<StatusBar style="auto" />
		</View>
	);
}

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
  gridRow: {
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


