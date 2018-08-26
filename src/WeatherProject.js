import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native'

export default class WeatherProject extends Component {
	state = {
		zip: ''
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					You input {this.state.zip}.
				</Text>
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
	}
});