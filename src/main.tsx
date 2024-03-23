import React from 'react'
import 'reflect-metadata';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InjectionProvider } from './Core/Providers/injection.tsx';
import { container } from '../AppIOC.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InjectionProvider container={container}>
      <App />
    </InjectionProvider>
  </React.StrictMode>,
)
