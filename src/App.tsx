import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './utils/queryClient'
import Router from './routes/Router'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
