import React from "react"

import App from "./App"

export default {
	title: "Images/App",
	component: App
}

const Template = args => <App {...args} />

export const ApplicationTemplate = Template.bind({})
ApplicationTemplate.args = {}
