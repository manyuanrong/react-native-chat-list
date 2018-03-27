import React from "react";
import { Image, View, TouchableWithoutFeedback } from "react-native";

import config from "../config";

export default class Avatar extends React.PureComponent {
	static defaultProps = {
		onAvatarClick: () => null,
		data: {
			avatar: ""
		}
	};

	render() {
		const style = this.props.style || config.chat.avatar.style;
		return <View style={[ { overflow: "hidden", backgroundColor: "#c5c5c5" }, style ]}>
			<TouchableWithoutFeedback onPress={() => this.props.onAvatarClick( this.props.data )}>
				<Image style={{ flex: 1 }} source={{ uri: this.props.data.avatar }}/>
			</TouchableWithoutFeedback>
		</View>
	}
}