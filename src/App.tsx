import { TeliStandardLayout } from "@telicent-oss/ds"
import './App.css'
import '@telicent-oss/ds/dist/style.css';
import "@telicent-oss/ds/dist/fontawesome.css";
import './main.css'
import { RdfInstanceViewer } from './rdfInstanceViewer/RdfInstanceViewer'

function App() {
  return (
    <TeliStandardLayout appName="instance">
      <RdfInstanceViewer />
    </TeliStandardLayout>
  )
}

export default App
