import {
	render,
	screen,
	waitForElementToBeRemoved
} from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"
import React from "react"
// import { wait } from "@testing-library/user-event/dist/utils";

describe("App", () => {
	it("should not break", async () => {
		render(<App />)
		expect(screen.getByTestId("loading")).toBeVisible()
		await waitForElementToBeRemoved(() => screen.queryByTestId("loading"))
		// expect(screen.getByTestId("main")).toBeVisible();
	})

	it("should render buttons", async () => {
		render(<App />)
		await waitForElementToBeRemoved(() => screen.queryByTestId("loading"))
		expect(screen.getAllByRole("button")).toHaveLength(30)
	})

	it("should show image", async () => {
		render(<App />)
		await waitForElementToBeRemoved(() => screen.queryByTestId("loading"))
		expect(screen.queryAllByRole("img")).toHaveLength(0)
		userEvent.click(screen.getAllByRole("button")[2])
		expect(screen.queryAllByRole("img")).toHaveLength(1)
	})
})
