import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import UserProvider from './contexts/UserProvider.tsx'


createRoot(document.getElementById('root')!).render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>
)
