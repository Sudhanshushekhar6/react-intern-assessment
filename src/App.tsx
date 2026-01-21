import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              index={route.index ?? false}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
