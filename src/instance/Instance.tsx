import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { withInjection } from "../Core/Providers/injection";
import { InstancePresenter } from "./InstancePresenter";

interface InstanceProps {
  presenter: InstancePresenter
}

export const InstanceComponent: React.FC<InstanceProps> = observer((props) => {
  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
    }
    props.presenter.load()
  }, [])
  return <div><p>Instance view</p></div>
})

export const Instance = withInjection({ presenter: InstancePresenter })(InstanceComponent)
