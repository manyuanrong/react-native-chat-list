import React, {Component} from 'react';
import {View} from 'react-native';
import {ChatList, Config} from "../src";
import data from "./data";

Config.chat.avatar.style.borderRadius = 25;
Config.chat.avatar.name.visible = false;
Config.chat.avatar.name.style = {
    fontSize: 14,
    marginBottom: 5,
    color: "#505050"
};

type Props = {};
export default class Example extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            data: data.map((item, index) => {
                return {
                    ...item,
                    key: index + ""
                }
            }).reverse()
        };
    }


    render() {
        return <View style={{flex: 1}}>
            <ChatList data={this.state.data} onItemClick={(item) => alert(JSON.stringify(item))}
                      onAvatarClick={() => alert("avatar")}/>
        </View>;
    }
}
