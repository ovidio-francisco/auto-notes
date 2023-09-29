import React from 'react';
import { Image, Text, TouchableOpacity} from 'react-native';


import buttonStyles from '../styles/buttonStyles.js'

const Button = ({icon, text}) => (
	<TouchableOpacity style={buttonStyles.button}>
		<Image source={icon} style={buttonStyles.buttonIcon }/>
		<Text style={buttonStyles.buttonText}>{text}</Text>
	</TouchableOpacity>
);

export default Button;
