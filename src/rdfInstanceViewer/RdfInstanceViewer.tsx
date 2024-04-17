import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { withInjection } from "../Core/Providers/injection";
import { RdfInstancePresenter } from "./RdfInstancePresenter";
import ResizableDivs from "../Components/ResizableDivs/ResizableDivs";
import { Diagram } from "../Components/Diagram/Diagram";
import { Terminal } from "../Components/Terminal/Terminal";
import { RdfPanelProps } from "../types";

export const RdfInstanceComponent: React.FC<RdfPanelProps> = observer((props) => {
  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
      return
    }
  }, [])

  return <ResizableDivs>
    <Diagram />
    <Terminal />
  </ResizableDivs>
})

export const RdfInstanceViewer = withInjection({ presenter: RdfInstancePresenter })(RdfInstanceComponent)
