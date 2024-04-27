import React from "react";
import ResizableDivs from "../Components/ResizableDivs/ResizableDivs";
import { Diagram } from "../Components/Diagram/Diagram";
import { Terminal } from "../Components/Terminal/Terminal";

export const RdfInstanceViewer: React.FC = () => (<ResizableDivs>
  <Diagram />
  <Terminal />
</ResizableDivs>
)

