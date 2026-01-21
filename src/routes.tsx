
import HomePage from "./pages/home"
import CreatePage from "./pages/create"
import ArchivePage from "./pages/archive"

const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "create",
    element: <CreatePage />,
  },
  {
    path: "archive",
    element: <ArchivePage />,
  },
]

export default routes
