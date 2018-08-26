import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native'

export default class WeatherProject extends Component {
	state = {
		zip: ''
	};

	// Handles users input
	_handleTextChange = (event) => {
		this.setState(() => {
			return {
				zip: event
			}
		})
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
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	input: {
		fontSize: 20,
		borderWidth: 2,
		height: 40
	},
	submitButton: {
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 15,
		height: 40,
	},
	submitButtonText:{
		color: 'white'
	}
});