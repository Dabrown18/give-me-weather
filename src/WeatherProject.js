import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Image } from 'react-native'

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
				<Text style={styles.welcome}>
					You input {this.state.zip}.
				</Text>
				<TextInput
					style={styles.input}
					value={this.state.zip}
					placeholder="Zip Code"
					maxLength={5}
					onChangeText={this._handleTextChange}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	input: {
		fontSize: 20,
		borderWidth: 2,
		height: 40
	}
});