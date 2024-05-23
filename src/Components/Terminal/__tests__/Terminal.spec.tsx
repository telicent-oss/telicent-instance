import "reflect-metadata"
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Terminal } from "../Terminal";
import { InjectionProvider } from "../../../Core/Providers/injection";
import { BaseIOC } from "../../../BaseIOC";
import { Types } from "../../../Core/Types";
import { FakeHttpGateway } from "../../../Core/FakeHttpGateway";

const mobXContainer = new BaseIOC().buildBaseTemplate()
mobXContainer.bind(Types.IDataGateway).to(FakeHttpGateway).inSingletonScope()

describe("Terminal", () => {
  it("should render", () => {
    const { container } = render(<InjectionProvider container={mobXContainer}><Terminal /></InjectionProvider>)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          style="display: flex; position: relative; text-align: initial; width: 100%; height: 93.5vh;"
        >
          <div
            style="display: flex; height: 100%; width: 100%; justify-content: center; align-items: center;"
          >
            Loading...
          </div>
          <div
            style="width: 100%; display: none;"
          />
        </section>
      </div>
    `)
  })
})
