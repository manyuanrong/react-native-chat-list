import React from "react";
import { Text } from "react-native";
import config from "../config";

export default class MessageContent extends React.Component {
	constructor( props ) {
		super( props );
	}

	static defaultProps = {
		data: {
			position: "left",
			type: "text",
			body: "MessageText"
		}
	};

	render() {
		const render = config.itemRenders[ this.props.data.type ];
		if ( render ) {
			return render( this.props.data );
		} else {
			return <Text style={{ color: "red", padding: 20 }}>未实现的消息类型</Text>
		}
	}
}