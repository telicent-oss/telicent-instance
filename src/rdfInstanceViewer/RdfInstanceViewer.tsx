import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { withInjection } from "../Core/Providers/injection";
import { RdfInstancePresenter } from "./RdfInstancePresenter";

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
  console.log(props.presenter.viewModel.hierarchy)
  return <div><p>InstanceView</p></div>
})

export const RdfInstanceViewer = withInjection({ presenter: RdfInstancePresenter })(RdfInstanceComponent)
