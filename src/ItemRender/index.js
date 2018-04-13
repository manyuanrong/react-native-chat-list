import config from "../config";
import React from "react";
import {Dimensions, Image, Linking, Text, TouchableWithoutFeedback, View} from "react-native";

const {width} = Dimensions.get("window");
const maxImageSize = width - 150;

class ImageItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        Image.getSize(props.source, (width, height) => {
            let scale = 1.0;
            if (width > height) {
                if (width > maxImageSize) {
                    scale = maxImageSize / width;
                }
            } else {
                if (height > maxImageSize) {
                    scale = maxImageSize / height;
                }
            }
            height = height * scale;
            width = width * scale;
            this.setState({width: width, height: height});
        });
    }

    render() {
        const style = {
            width: this.state.width,
            height: this.state.height
        };
        return <Image style={style} source={{uri: this.props.source}}/>
    }
}

export default renders = {
    text(item, position = "left") {
        const color = config.chat.bubbles[position].color;
        return <Text style={{paddingHorizontal: 10, paddingVertical: 5, color: color}}>{item.body}</Text>
    },
    image(item, position = "left") {
        return <ImageItem source={item.body}/>
    },
    location(item, position) {
        return <View style={{width: 200}}>
            <Text style={{padding: 5, backgroundColor: "#fff"}}>
                {item.body.address}
            </Text>
            <Image source={require("./assets/map.png")} style={{width: 200, height: 100, backgroundColor: "#fff"}}
                   resizeMode="cover"/>
        </View>
    }
}