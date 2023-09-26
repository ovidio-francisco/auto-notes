import React from 'react';
import { Image, Text, TouchableOpacity} from 'react-native';


import homeStyles from '../styles/homeStyles.js'

const Button = ({icon, text}) => (
	<TouchableOpacity style={homeStyles.button}>
		<Image source={icon} style={homeStyles.buttonIcon }/>
		<Text style={homeStyles.buttonText}>{text}</Text>
	</TouchableOpacity>
);

export default Button;
