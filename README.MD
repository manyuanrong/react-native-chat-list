# react-native-chat-list

> 聊天列表

![preview](./example/preview.png)

## Usage

#### 1.Install
npm
```shell
$ npm install --save react-native-chat-list
```
yarn
```shell
$ yarn add react-native-chat-list
```

#### 2.Import
```javascript
import { ChatList, Config } from 'react-native-chat-list';
```

#### 3.Render
```javascript
<ChatList data={this.state.data}/>
```

## Component Props
|Props|Type|Description|Default|
|-----|-----|-----|-----|
| visible | boolean | 是否显示 |  |
| data | array | 数据 | null |