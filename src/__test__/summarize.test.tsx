import "@testing-library/dom"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { SummarizedText } from "../components/prettify/summarized-text"

describe("Summarize component testing", () => {
  it("checks if the text is displayed correctly", () => {
    render(
      <SummarizedText
        data={{
          text: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
        }}
        isPending={false}
      />
    )

    expect(screen.getByTestId("summarized-text").innerText).toBe(
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
    )
  })
})
