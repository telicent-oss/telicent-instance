import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DialogBox } from "../DialogBox"

describe("DialogBox", () => {
  it("should render", () => {
    const { container } = render(<DialogBox onClose={() => { }} title="DialogBox" > </DialogBox>)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="absolute top-0 left-0 h-full w-full z-40 bg-black-100 opacity-80"
        />
        <div
          class="bg-black-100 z-50 absolute top-24 left-1/2 transform -translate-x-1/2 py-3 px-6  rounded border-black-400 shadow-black-300 shadow-md border"
        >
          <h2
            class="text-left pb-6"
          >
            DialogBox
          </h2>
           
        </div>
      </div>
    `)
  })
})
