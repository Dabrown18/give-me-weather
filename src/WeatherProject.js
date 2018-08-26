import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native'

// Custom components
import Forecast from './Forecast';

// Images
const SunFlower = require('./img/sun_flowers.png');

export default class WeatherProject extends Component {
	state = {
		zip: '',
		forecast :{
			main: 'Clouds',
			description: 'few Clouds',
			temp: 45.7
		}
	};

	// Handles users input
	_handleTextChange = (event) => {
		this.setState(() => ({ zip: event }))
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={SunFlower}
					style={styles.backdrop}
					imageStyle={{resizeMode: 'cover'}}
				>
					<View style={styles.overlay}>
						<View style={styles.row}>
							<Text style={styles.mainText}>
								Current weather for
							</Text>
							<View style={styles.zipContainer}>
								<TextInput
									style={[styles.zipCode, styles.mainText]}
									value={this.state.zip}
									placeholder="Zip Code"
									maxLength={5}
									underlineColorAndroid="transparent"
									onChangeText={this._handleTextChange}
								/>
							</View>
							<Forecast
								main={this.state.forecast.main}
								description={this.state.forecast.description}
								temp={this.state.forecast.temp}
							/>
						</View>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

const baseFontSize = 16;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	backdrop: {
		flex: 1,
		flexDirection: 'column',
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	overlay: {
		paddingTop: 5,
		backgroundColor: '#000000',
		opacity: 0.5,
		flexDirection: 'column',
		alignItems: 'center',
		flex: .40
	},
	row: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30
	},
	zipContainer: {
		flex: 1,
		borderBottomColor: '#DDDDDD',
		borderBottomWidth: 1,
		marginLeft: 5,
		marginTop: 3
	},
	mainText: {
		flex: 1,
		fontSize: baseFontSize,
		color: '#FFFFFF'
	},
	zipCode: {
		width: 50,
		height: baseFontSize
	}
});