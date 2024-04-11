import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { withInjection } from "../Core/Providers/injection";
import { RdfInstancePresenter } from "./RdfInstancePresenter";
import ResizableDivs from "../Components/ResizableDivs/ResizableDivs";
import Diagram from "../Components/Diagram/Diagram";
import Terminal from "../Components/Terminal/Terminal";

interface InstanceProps {
  presenter: RdfInstancePresenter
}

export const RdfInstanceComponent: React.FC<InstanceProps> = observer((props) => {
  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
    }
    props.presenter.load()
  }, [])

  if (!(props.presenter.viewModel.hasHierarchy)) return null
  // console.log(props.presenter.viewModel.hierarchy)
  return <ResizableDivs>
    <Diagram />
    <Terminal handleRdfInput={() => { }} />
  </ResizableDivs>
})

export const RdfInstanceViewer = withInjection({ presenter: RdfInstancePresenter })(RdfInstanceComponent)
