import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { Button } from "../components/ui/button"

describe("Button component", () => {
  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(screen.getByRole("button")) // Убедитесь, что у вашей кнопки есть роль "button"
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
