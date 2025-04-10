import { Provider } from "./components/ui/provider"
import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'

const queryClient = new QueryClient()

const root = document.getElementById('root')!
createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
        </Provider>
        </QueryClientProvider>
  </React.StrictMode>
)

