import "@testing-library/dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Button } from "../components/ui/button"

describe("Button component testing", () => {
  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1) // проверяем работу нажатия на кнопку
  })
})
