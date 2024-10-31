import "@testing-library/dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { SummarizeForm } from "../components/prettify/summarize-form"

describe("form performance", () => {
  it("form working or not", () => {
    const handleSubmit = vi.fn()
    render(<SummarizeForm onSubmit={handleSubmit} />)
    screen.debug()
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox")
    const select: HTMLSelectElement = screen.getByRole("combobox")

    fireEvent.change(textarea, {
      target: { value: "LoremLoremLoremLoremLoremLoremLoremLorem" }
    })
    fireEvent.change(select, { target: { value: "strong" } })
    const submitButton = screen.getByRole("button", { name: "Суммаризировать" })

    fireEvent.click(submitButton)
    expect(textarea.value).toBe("LoremLoremLoremLoremLoremLoremLoremLorem")
    expect(select.value).toBe("strong")
  })
})
