import React from "react";
import {FlatList, View} from "react-native";
import Message from "../Message";
import config from "../config";

export default class ChatList extends React.Component {

    static defaultProps = {
        onAvatarClick: () => null,
        onItemClick: () => null,
        onLoadMore: () => null
    };

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.height !== this.state.height) return true;
        return nextProps.data.length !== this.props.data.length;
    }

    renderItem({item, index}) {
        return <View>
            <Message type={item.type} content={item.content} name={item.name} position={item.position} time={item.time}
                     prevMessage={this.getPrevMessage(index)} onItemClick={this.props.onItemClick}
                     onAvatarClick={this.props.onAvatarClick} data={item}/>
        </View>
    }

    getPrevMessage(index) {
        if (index === this.props.data.length - 1) return null;
        return this.props.data[index + 1];
    }

    onScrollEnd({nativeEvent}) {
        const contentHeight = nativeEvent.contentSize.height;
        const offset = nativeEvent.contentOffset.y;
        const height = nativeEvent.layoutMeasurement.height;
        if (offset + height >= contentHeight - 10) {
            this.props.onLoadMore();
        }
    }

    render() {
        const {style} = this.props;
        const props = {
            data: this.props.data,
            contentContainerStyle: {
                minHeight: this.state.height,
                justifyContent: "flex-end",
                opacity: this.state.height ? 1 : 0
            },
            initialNumToRender: 15,
            style: [style, config.chat.list.style]
        };

        return <FlatList onLayout={({nativeEvent}) => {
            this.setState({height: nativeEvent.layout.height});
        }} ref="list" {...props} inverted={true} renderItem={this.renderItem.bind(this)}
                         onMomentumScrollEnd={this.onScrollEnd.bind(this)}/>;
    }
}