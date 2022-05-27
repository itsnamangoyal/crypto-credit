import { StrictMode } from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { Provider } from "react-redux"

import App from "./App"
import { store } from "./store"

import "./tailwind.css"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      notifyOnChangeProps: "tracked",
      retry: 3,
    },
  },
})

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
)
