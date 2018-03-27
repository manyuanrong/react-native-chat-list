import ItemRender from "./ItemRender";

export default {
	chat: {
		time: {
			formatter: null,
			style: {
				fontSize: 12,
				padding: 10,
				color: "#c1c1c1"
			}
		},
		avatar: {
			style: {
				width: 50,
				height: 50,
				borderRadius: 0
			},
			name: {
				visible: false,
				style: {}
			}
		},
		message: {
			style: {}
		},
		list: {
			style: {
				padding: 10,
				backgroundColor: "#eaeaea"
			}
		},
		bubbles: {
			left: {
				bgColor: "#fff",
				color: "#444",
				radius: 5,
			},
			right: {
				bgColor: "red",
				color: "#fff",
				radius: 5,
			}
		}
	},
	itemRenders: {
		text: ItemRender.text,
		image: ItemRender.image,
		location: ItemRender.location
	}
};