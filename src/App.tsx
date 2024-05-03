import { TeliStandardLayout } from "@telicent-oss/ds";
import './App.css';
import '@telicent-oss/ds/dist/style.css';
import "@telicent-oss/ds/dist/fontawesome.css";
import './main.css'
import { RdfInstanceViewer } from './rdfInstanceViewer/RdfInstanceViewer'
import { HierarchyMenu } from "./Components/HierarchyMenu/HierarchyMenu";
import { APP_CONFIG_JSON } from "./constants";

function App() {
  return (
    <TeliStandardLayout appName={APP_CONFIG_JSON.name}>
      <HierarchyMenu />
      <RdfInstanceViewer />
    </TeliStandardLayout>
  )
}

export default App
