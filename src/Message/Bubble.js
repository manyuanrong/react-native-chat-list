import React from "react";
import { View, StyleSheet } from "react-native";
import config from "../config";

function Triangle( props ) {
	const { bgColor } = config.chat.bubbles[ props.position ];
	const style = {
		marginTop: 12,
		width: 0,
		height: 0,
		backgroundColor: "transparent",
		borderStyle: "solid",
		borderLeftWidth: 8,
		borderRightWidth: 8,
		borderBottomWidth: 8,
		borderTopWidth: 8,
		borderTopColor: "transparent",
		borderBottomColor: "transparent",
		borderRightColor: "transparent",
		borderLeftColor: "transparent"
	};
	if ( props.position === "left" ) {
		style.borderRightColor = bgColor
	} else {
		style.borderLeftColor = bgColor
	}
	return <View style={style}/>
}

function Box( props ) {
	const { bgColor, radius } = config.chat.bubbles[ props.position ];
	const style = {
		borderRadius: radius,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		minHeight: 40,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: bgColor,
		backgroundColor: bgColor
	};
	return <View style={style}>
		{props.children}
	</View>;
}

export default class Bubble extends React.PureComponent {
	static defaultProps = {
		position: "left",
		bgColor: "red",
		textColor: "#fff"
	};

	renderLeft() {
		return <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-start", paddingRight: 50 }}>
			<Triangle position="left"/>
			<Box position="left">
				{this.props.children}
			</Box>
		</View>
	}

	renderRight() {
		return <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", paddingLeft: 50 }}>
			<Box position="right">
				{this.props.children}
			</Box>
			<Triangle position="right"/>
		</View>
	}

	render() {
		return this.props.position === "left" ? this.renderLeft() : this.renderRight()
	}
}