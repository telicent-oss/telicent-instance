import { TeliStandardLayout } from "@telicent-oss/ds"
import './App.css'
import '@telicent-oss/ds/dist/style.css';
import "@telicent-oss/ds/dist/fontawesome.css";
import './main.css'
import { RdfInstanceViewer } from './rdfInstanceViewer/RdfInstanceViewer'
import SideDrawer from "./Components/SideDrawer/SideDrawer";

function App() {
  return (
    <TeliStandardLayout appName="instance">
      <SideDrawer>
        <p>tetetete</p>
      </SideDrawer>
      <RdfInstanceViewer />
    </TeliStandardLayout>
  )
}

export default App
