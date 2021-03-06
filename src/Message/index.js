import React from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import Avatar from "../Avatar";
import Bubble from "./Bubble";
import MessageContent from "./MessageContent";
import config from "../config";
import moment from "moment";

export default class Message extends React.PureComponent {

    static defaultProps = {
        prevMessage: null,
        onAvatarClick: null,
        onItemClick: null,
        data: null
    };

    renderLeft() {
        return <View style={{flexDirection: "row", flex: 1}}>
            <Avatar data={this.props.data} onAvatarClick={this.props.onAvatarClick}/>
            <View style={{flexDirection: "column", flex: 1}}>
                {config.chat.avatar.name.visible &&
                <Text style={[{
                    paddingLeft: 20,
                    textAlign: "left"
                }, config.chat.avatar.name.style]}>{this.props.name}</Text>}
                <View style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={() => this.props.onItemClick(this.props.data)}>
                        <View>
                            <Bubble {...this.props}>
                                <MessageContent {...this.props}/>
                            </Bubble>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    }

    renderRight() {
        return <View style={{flexDirection: "row", flex: 1}}>
            <View style={{flexDirection: "column", flex: 1}}>
                {config.chat.avatar.name.visible &&
                <Text style={[{
                    paddingRight: 20,
                    textAlign: "right"
                }, config.chat.avatar.name.style]}>{this.props.name}</Text>}
                <TouchableWithoutFeedback onPress={() => this.props.onItemClick(this.props.data)}>
                    <View>
                        <Bubble {...this.props}>
                            <MessageContent {...this.props}/>
                        </Bubble>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Avatar path={this.props.avatar} data={this.props.data} onAvatarClick={this.props.onAvatarClick}/>
        </View>
    }

    formatTime(time) {
        return moment(time).format("YYYY-MM-DD hh:mm");
    }

    renderTime() {
        if (!this.props.time) return null;
        const formatter = config.chat.time.formatter || this.formatTime;
        if (this.props.prevMessage && this.props.prevMessage.time && this.props.time - this.props.prevMessage.time < 60000) {
            const prevMinutes = new Date(this.props.prevMessage.time).getMinutes();
            const currentMinutes = new Date(this.props.time).getMinutes();
            if (prevMinutes === currentMinutes) {
                return null;
            }
        }
        return <Text style={[{alignSelf: "center"}, config.chat.time.style]}>{formatter(this.props.time)}</Text>
    }

    render() {
        const style = [{paddingVertical: 5}, config.chat.message.style];
        return <View style={style}>
            {this.renderTime()}
            {this.props.position === "left" ? this.renderLeft() : this.renderRight()}
        </View>
    }
}